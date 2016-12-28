import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './components/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  url: string = 'http://localhost:1337/api/home';

  public userAvatar: string;
  private imgUrl: string = 'http://localhost:1337/static/images/user-аvatar-images/';
  constructor(
    private _authService: AuthenticationService,
    private _userService: UserService,
    private router: Router
  ) {
    this.userAvatar = '';
  }

  ngOnInit(): void {
    this._authService.getLoggedUser()
      .subscribe(result => {
        let username = result.body.username;
        this._userService.getUserAvatar(username)
          .map(r => r.json())
          .subscribe(avatar => {
            this.userAvatar = this.imgUrl + avatar;
          });
      });
  }

  logout(): void {
    this._authService.logout();
  }

  redirectToUser() {
    this.router.navigate(['/user']);
  }
}
