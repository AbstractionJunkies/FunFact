import { Component, OnInit } from '@angular/core';
import { HomeComponentService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  constructor(private _homeService: HomeComponentService) { }

  ngOnInit() {
    this._homeService.getHome()
      .subscribe((r: any) => {
        this.title = JSON.stringify(r);
      });
  }
}
