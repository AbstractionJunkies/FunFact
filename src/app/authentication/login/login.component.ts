import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';
import { UserService } from '../../components/user/user.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userToLogin: FormGroup;
  options: Object;

  constructor(private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _notification: NotificationsService,
    private _router: Router,
    private _userService: UserService) { }

  ngOnInit() {
    this.userToLogin = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  login(): void {
    this._authService.login(this.userToLogin.value)
      .subscribe((res: any) => {
        this._notification.success('', res.body.message);

        this._userService.loadAvatar();
        this._router.navigate(['/home']);
      },
      (err: any) => {
        let notificationMsg = JSON.parse(err._body).message;
        this._notification.error('', notificationMsg);
      });
  }

  logout(): void {
    this._authService.logout();

  }
}
