// import { Component } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title: string = 'are we';
// }
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  url: string = 'http://localhost:1337/';

  constructor(private _http: Http) { }

  ngOnInit(): void {
    this._http.get(this.url)
      .map(res => {
        return res.text();
      })
      .subscribe(data => {
        this.title = data;
      }
      );

  }
}
