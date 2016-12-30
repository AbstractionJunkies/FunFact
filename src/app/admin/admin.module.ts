import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { ManageDeletedFactsComponent } from './manage-deleted-facts/manage-deleted-facts.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule
  ],
  declarations: [AdminComponent, ManageDeletedFactsComponent],
  providers: [AdminService]
})
export class AdminModule { }
