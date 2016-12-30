import {NgModule} from '@angular/core';
import {ShareButtonsModule} from "ng2-sharebuttons";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {Ng2UploaderModule} from "ng2-uploader";
import {ImageUploadModule} from "ng2-imageupload";
import {HomeComponentService} from './home.service';
import {HomeComponent} from './home.component';
import {AuthenticationService} from "../authentication/authentication.service";
import {ChartsModule} from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeComponentService,
    AuthenticationService
  ],
  imports: [
    ImageUploadModule,
    Ng2UploaderModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ShareButtonsModule,
    ChartsModule,
    BrowserModule,
    CommonModule
  ],
  exports: []
})
export class HomeModule {

}
