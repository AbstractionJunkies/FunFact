import { Component, OnInit, Input } from '@angular/core';
import { FactService } from './fact.service';

import 'rxjs/add/operator/switchMap';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { Response } from '@angular/http';


@Component({
  templateUrl: './fact-list.template.html',
  styleUrls: ['fact-list.styles.css']
})
export class FactsListComponent implements OnInit {
  @Input() public facts;
  private _alreadyLoaded: [Number];

  constructor(
    private factService: FactService) {
  }

  ngOnInit() {
    this.factService.getAllFacts(0)
      .subscribe((res: any) => {
        this.facts = res.body;
      });

    this._alreadyLoaded = [0];
  }

  onScrollDown() {
    let page = document.getElementsByClassName('fact').length;
    page = (page / 5) | 0;
    if (this._alreadyLoaded.indexOf(page) < 0) {
      this.factService.getAllFacts(page)
        .subscribe((res: any) => {
          console.log(res.body.length);
          console.log(res.body);
          if (res.body.length !== 0) {
            for (let fact of res.body) {
              this.facts.push(fact);
            }
          }
        })
    }
    this._alreadyLoaded.push(page);

  }
}
