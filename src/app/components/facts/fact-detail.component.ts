import {Component, Input, OnInit, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {FactService} from './fact.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Fact} from './fact';
import {ShareButtonsModule} from 'ng2-sharebuttons';

import {NotificationsService} from '../../../../node_modules/angular2-notifications';

import 'rxjs/add/operator/switchMap';
import {AdminService} from '../../admin/admin.service';

@Component({
  templateUrl: './fact-detail.template.html',
  styleUrls: ['./fact-detail.css'],
  animations: [
    trigger('factPanel', [
      transition('void => *', [
        animate(600, keyframes([
          style({oppacity: 0, transform: 'translateX(-200px)', offset: 0}),
          style({oppacity: 1, transform: 'translateX(-25px)', offset: .75}),
          style({oppacity: 1, transform: 'translateX(0)', offset: 1}),
        ]))
      ])
    ]),
    trigger('factComments', [
      transition('void => *', [
        animate(600, keyframes([
          style({oppacity: 0, transform: 'translateX(200px)', offset: 0}),
          style({oppacity: 1, transform: 'translateX(25px)', offset: .75}),
          style({oppacity: 1, transform: 'translateX(0)', offset: 1}),
        ]))
      ])
    ])
  ]
})
export class FactDetailComponent implements OnInit {
  @Input() public fact: Fact;

  public factComments;
  public factCommentsToDisplay;

  private ratingArr = [1, 2, 3, 4, 5]

  private factID;
  private ratedCount: number;
  private commentPage: number;
  private noMoreComments: boolean = false;

  constructor(private factService: FactService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthenticationService,
              private adminService: AdminService,
              private notification: NotificationsService) {

    this.fact = <Fact>{};
    this.factComments = [{}];
    this.factID = 0;
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        this.factID = params['id'];
        return this.factService.getFactById(this.factID);
      })
      .map(r => r.json())
      .subscribe((r: any) => {
        this.fact = r;
        this.fact.rating = r.rating;
        this.ratedCount = r.usersRated.length;
      });

    this.factService.getFactComments(this.factID)
      .map(r => r.json())
      .subscribe((result: any) => {
          this.factComments = result;
          this.commentPage = 0;
          this.factCommentsToDisplay = this.getPagedComments(this.commentPage);
        },
        (err) => {
          console.log(err);
        });

    this.factService.getComment()
      .subscribe((comment) => {
        this.factComments.push(comment);
        this.factCommentsToDisplay.push(comment);
      });


  }

  goBack(): void {
    this.location.back();
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }

  rateFact(factId, value): void {
    this.factService.rateFact(factId, value)
      .subscribe((res: any) => {
          this.fact.rating = +res.body.rate;
          this.ratedCount += 1;
        },
        (err: any) => {
          console.log(err);
        });
  }

  addToFavorites(fact) {
    let factToAdd = {
      title: fact.title,
      category: fact.category,
      img: fact.img,
      rating: fact.rating
    };
    this.authService.getLoggedUser()
      .subscribe(result => {
        let username = result.body.username;

        this.factService.addToFavorites(username, factToAdd).subscribe();
      });
  }

  loadMoreComments() {
    this.commentPage += 1;
    let newComments = this.getPagedComments(this.commentPage);
    for (let comment of newComments) {
      this.factCommentsToDisplay.push(comment);
    }

    this.noMoreComments = this.factComments.length === this.factCommentsToDisplay.length ? true : false;
  }

  getPagedComments(page: number) {
    let startIndex = this.commentPage * 5;
    let endIndex = startIndex + 5;

    let newComments = this.factComments.slice(startIndex, endIndex);
    return newComments;
  }

  standby() {
    //TODO: download the image!
    this.fact.img = 'http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg';
  }

  deleteFact(factId) {
    this.adminService.deleteFact(factId)
      .subscribe((res: any) => {
          this.notification.success('', res)
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }
}

