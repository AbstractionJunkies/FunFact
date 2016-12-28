import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  url: string = 'http://localhost:1337/api/home';

  constructor(private _authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this._authService.logout();
  }
}
