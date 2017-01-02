import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  public usersInfo: [{}];
  private imgUrl: string = 'https://fun-fact-api.herokuapp.com/static/images/user-аvatar-images/';

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getAllUserInfo()
      .subscribe((res: any) => {
        console.log(res.body);
        this.usersInfo = res.body.data;
      });
  }

  toggleBlocUser(userId) {
    this._adminService.toggleBlockedUsers(userId)
      .subscribe((res: any) => {
        console.log(res);
      })
  }

  makeUserAdmin(userId) {
    this._adminService.makeUserAdmin(userId)
      .subscribe((res: any) => {
        console.log(res);
      })
  }
}
