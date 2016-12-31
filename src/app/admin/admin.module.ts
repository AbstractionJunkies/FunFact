import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';

import { AdminService } from './admin.service';
import { ManageDeletedFactsComponent } from './manage-deleted-facts/manage-deleted-facts.component';
import { SimpleNotificationsModule, NotificationsService } from '../../../node_modules/angular2-notifications';
import { ManageUsersComponent } from './manage-users/manage-users.component';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    SimpleNotificationsModule
  ],
  declarations: [
    ManageDeletedFactsComponent,
    ManageUsersComponent
  ],
  providers: [
    AdminService,
    NotificationsService
  ]
})
export class AdminModule { }
