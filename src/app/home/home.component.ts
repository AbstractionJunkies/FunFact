import {Component, OnInit, Input} from '@angular/core';
import { HomeComponentService } from './home.service';

import 'rxjs/add/operator/switchMap';
import {Fact} from "../components/facts/fact";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomFact :Fact;

  title: string;
  constructor(private _homeService: HomeComponentService) {
    this.randomFact = <Fact>{};
  }

  ngOnInit() {
    this._homeService.getHome()
      .subscribe((res: any) => {
        this.randomFact = res.body;
        console.log(this.randomFact)
      });
  }
}
