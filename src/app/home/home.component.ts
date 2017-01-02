import {Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {HomeComponentService} from './home.service';
import {KnowledgePieChartComponent} from './chart-component/knowledge-pie-chart.components';
import {ChartsModule} from 'ng2-charts/ng2-charts';

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
  public voted: Boolean;

  title: string;

  constructor(private _homeService: HomeComponentService) {
    this.randomFact = <Fact>{};
    this.randomFact.knowledgeCount = {
      yes: 0,
      no: 0
    };

  }

  ngOnInit() {
    this._homeService.getHome()
      .subscribe((res: any) => {
        this.randomFact = res.body;
      });

    this.voted = false;
  }

  onYesClick(): void {
    this._homeService.voteYes(this.randomFact._id, 'yes')
      .subscribe((res: any) => {
          this.randomFact.knowledgeCount.yes += 1;
          this.voted = true;
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
          this.voted = true;
        },
        (err: any) => {
          console.log(err);
        });
  }

  standby() {
    //TODO: download the image!
    this.randomFact.img = 'http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg';
  }
}
