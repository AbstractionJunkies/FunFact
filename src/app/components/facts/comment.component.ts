import { Component, OnInit, Input } from '@angular/core';
import { FactService } from './fact.service';
import { AuthenticationService } from '../../authentication/authentication.service';

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
  private username: string;

  constructor(
    private _authService: AuthenticationService,
    private factService: FactService
  ) {
    this.factId = 0;
    this.username = '';
  }

  ngOnInit() {
    this._authService.getLoggedUser()
      .subscribe(res => {
        let currentLoggedUser = res.body.username;
        this.username = currentLoggedUser;
        console.log(this.username);
      });
  }

  save(comment, factId) {
    let commentToAdd = {
      comment,
      username: this.username
    };
    console.log(comment, factId);

    this.factService.addComment(commentToAdd, factId).subscribe();
  }
}
