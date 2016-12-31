import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-manage-deleted-facts',
  templateUrl: './manage-deleted-facts.component.html',
  styleUrls: ['./manage-deleted-facts.component.css']
})
export class ManageDeletedFactsComponent implements OnInit {

  public deletedFacts: any;
  public notificationOptions: Object;

  constructor(
    private _adminService: AdminService,
    private _notification: NotificationsService
  ) { }

  ngOnInit() {
    this._adminService.getDeletedFacts()
      .subscribe((res: any) => {
        this.deletedFacts = res.body.data
      });

    this.notificationOptions = { timeOut: 2500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['right', 'top'] };
  }

  restoreImage(factId) {
    this._adminService.restoreDeletedFact(factId)
      .subscribe((res: any) => {
        this._notification.success('success', 'The fact was restored')
        this.deletedFacts.forEach((fact) => {
          if (fact._id === factId) {
            fact.isDeleted = false;
            return;
          };
        });
      },
      (err: any) => {
        this._notification.error('success', err)
      });
  }

}
