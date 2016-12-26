import { Component, OnInit } from '@angular/core';
import { FactService } from './fact.service';

import 'rxjs/add/operator/switchMap';
@Component({
  templateUrl: './fact-list.template.html',
  styleUrls: ['fact-list.styles.css']
})
export class FactsListComponent implements OnInit {
  private facts;

  constructor(
    private factService: FactService) {
  }

  ngOnInit() {
    this.factService.getAllFacts()
      .map(x => x.json())
      .subscribe((r: any) => {
        this.facts = r;
      });
  }
}
