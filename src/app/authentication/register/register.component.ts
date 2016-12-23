import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userToRegister: User;

  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
    this.userToRegister = new User('', '', '', '');
  }

  register(): void {
    this._authService
      .register(this.userToRegister)
      .subscribe(res => {
        console.log(res);
      });
  }
}
