import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public info;

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getAllUserInfo()
      .subscribe((res: any) => {
        console.log(res.body);
        this.info = res.body.data;
      });
  }

}
