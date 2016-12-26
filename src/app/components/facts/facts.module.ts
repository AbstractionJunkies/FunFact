import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsListComponent } from './fact-list.component';
import { FactUploadComponent } from './fact-upload.component';
import { FactService } from './fact.service';
import { FactDetailComponent } from './fact-detail.component';
import { AuthenticationService } from '../../authentication/authentication.service';
import { SharedModule } from '../../shared/shared.module';
import { FactComponent } from './fact.component';
import { CommentComponent } from './comment.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FactsListComponent },
    { path: 'upload', component: FactUploadComponent },
    { path: 'facts/fact/:id', component: FactDetailComponent }
];

@NgModule({
    declarations: [
        FactComponent,
        CommentComponent,
        FactDetailComponent,
        FactsListComponent,
        FactUploadComponent
    ],
    providers: [
        FactService,
        AuthenticationService
    ],
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        SharedModule,
        ImageUploadModule,
        Ng2UploaderModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class FactsModule { }
