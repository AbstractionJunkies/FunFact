import { Component, OnInit, Input } from '@angular/core';
import { FactService } from './fact.service';
import { AuthenticationService } from '../../authentication/authentication.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'fact-comment-selector',
  template: `
    <textarea #area [(ngModel)]="commentValue"></textarea>
    <input type="button" (click)="save(area.value, factId)" value="save">
  `
})
export class CommentComponent implements OnInit {

  @Input() public factId;
  private username: string;
  private commentValue: string;

  constructor(
    private _authService: AuthenticationService,
    private factService: FactService
  ) {
    this.factId = 0;
    this.username = '';
    this.commentValue = '';
  }

  ngOnInit() {
    this._authService.getLoggedUser()
      .subscribe(res => {
        let currentLoggedUser = res.body.username;
        this.username = currentLoggedUser;
      });
  }

  save(comment, factId) {
    let commentToAdd = {
      comment,
      username: this.username
    };

    this.factService.addComment(commentToAdd, factId).
      map(r => r.json())
      .subscribe((result) => {
        this.factService.setComment(result);
      });

    this.commentValue = '';
  }
}
