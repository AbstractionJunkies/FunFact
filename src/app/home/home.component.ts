import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {HomeComponentService} from './home.service';

import 'rxjs/add/operator/switchMap';
import {Fact} from "../components/facts/fact";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomFact: Fact;


  title: string;

  constructor(private _homeService: HomeComponentService) {
    this.randomFact = <Fact>{};
    this.randomFact.knowledgeCount = {
      yes: 0,
      no: 0
    }
  }

  ngOnInit() {
    this._homeService.getHome()
      .subscribe((res: any) => {
        this.randomFact = res.body;
      });
  }

  onYesClick(): void {
    this._homeService.voteYes(this.randomFact._id, 'yes')
      .subscribe((res: any) => {
          this.randomFact.knowledgeCount.yes += 1;
        },
        (err: any) => {
          console.log(err);
        });
  }

  onNoClick() {
    this._homeService.voteNo(this.randomFact._id, 'no')
      .subscribe((res: any) => {
          this.randomFact.knowledgeCount.no += 1;
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        });
  }
}
