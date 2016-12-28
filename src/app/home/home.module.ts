import {NgModule} from '@angular/core';
import {ShareButtonsModule} from "ng2-sharebuttons";
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {ReactiveFormsModule} from "@angular/forms";
import {Ng2UploaderModule} from "ng2-uploader";
import {ImageUploadModule} from "ng2-imageupload";
import {HomeComponentService} from './home.service';
import {HomeComponent} from './home.component';
import {AuthenticationService} from "../authentication/authentication.service";

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
    ShareButtonsModule
  ],
  exports: []
})
export class HomeModule {

}
