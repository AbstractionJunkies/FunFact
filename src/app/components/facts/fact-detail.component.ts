import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {FactService} from './fact.service';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Fact} from './fact';
import {ShareButtonsModule} from 'ng2-sharebuttons';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: './fact-detail.template.html',
  styleUrls: ['./fact-detail.css']
})

export class FactDetailComponent implements OnInit {
  @Input() public fact: Fact;

  public factComments;
  public factCommentsToDisplay;

  private factID;
  private ratedCount: number;
  private ratingArr: [number] = [1, 2, 3, 4, 5];
  private commentPage: number;

  constructor(private factService: FactService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthenticationService) {

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
      });

    this.factService.getComment()
      .subscribe((comment) => {
        this.factComments.push(comment);
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

  addToFavorites(username, fact) {
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
  }

  getPagedComments(page: number) {
    let startIndex = this.commentPage * 5;
    let endIndex = startIndex + 5;

    let newComments = this.factComments.slice(startIndex, endIndex);
    return newComments;
  }
}

