import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService]
})
export class AdminModule { }
