import {Component, OnInit} from '@angular/core';

const homePageUrl = 'http://localhost:4200/#/home';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  onButtonClick() {
    window.location.replace(homePageUrl);
  }

}
