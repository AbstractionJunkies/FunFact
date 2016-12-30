import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-deleted-facts',
  templateUrl: './manage-deleted-facts.component.html',
  styleUrls: ['./manage-deleted-facts.component.css']
})
export class ManageDeletedFactsComponent implements OnInit {

  public deletedFacts: any;

  constructor(
    private _adminService: AdminService
  ) { }

  ngOnInit() {
    this._adminService.getDeletedFacts()
      .subscribe((res: any) => {
        console.log(res);
        this.deletedFacts = res.body.data
      });
  }
  restoreImage(factId) {
    this._adminService.restoreDeletedFact(factId)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

}
