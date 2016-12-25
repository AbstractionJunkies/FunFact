import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'fact-comment-selector',
  template: `
    <textarea #area></textarea>
    <input type="button" (click)="save(area.value, factId)" value="save">
  `
})
export class CommentComponent implements OnInit {
  @Input() public factId;

  constructor() {
    this.factId = 0;
  }

  ngOnInit() {

  }

  save(comment, factId) {
    console.log(factId);


  }
}
