import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';
import { UserSettingsComponent } from './user-settings.component';

import { AuthenticationModule } from '../../authentication/authentication.module';

@NgModule({
    declarations: [
        UserComponent,
        UserSettingsComponent
    ],
    providers: [
        UserService
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ImageUploadModule,
        Ng2UploaderModule,
        AuthenticationModule
    ],
    exports: []
})
export class UserModule { }
