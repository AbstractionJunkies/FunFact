import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserAvatarUploadComponent } from './user-avatar-upload.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';
import { AuthenticationService } from '../../authentication/authentication.service';

@NgModule({
    declarations: [
        UserComponent,
        UserAvatarUploadComponent
    ],
    providers: [
        UserService,
        AuthenticationService
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ImageUploadModule,
        Ng2UploaderModule
    ],
    exports: []
})
export class UserModule { }
