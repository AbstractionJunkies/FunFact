import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

import { NotificationsService } from '../../../../node_modules/angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userToRegister: FormGroup;
  options: Object;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _notification: NotificationsService,
    private _router: Router) { }

  ngOnInit() {
    this.userToRegister = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'confirmedPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.options = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  register(): void {
    this._authService
      .register(this.userToRegister.value)
      .subscribe((res: any) => {
        this._notification.success('', res.body.message);
        setTimeout(() => this._router.navigateByUrl('/login'), 2500);
      },
      (err: any) => {
        let notificationMsg = JSON.parse(err._body).message;
        this._notification.error('', notificationMsg);
      });
  }
}
