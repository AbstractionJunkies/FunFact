import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/User';

import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userToRegister: User;
  options: Object;

  constructor(private _authService: AuthenticationService, private _notification: NotificationsService) { }

  ngOnInit() {
    this.userToRegister = new User('', '', '', '');
    this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: true, animate: 'scale', position: ['right', 'bottom'] };
  }

  register(): void {
    this._authService
      .register(this.userToRegister)
      .subscribe(res => {
        if (res.success === 'true') {
          this._notification.success('', res.message);
        } else {
          this._notification.error('', res.message);
        }
      });
  }
}
