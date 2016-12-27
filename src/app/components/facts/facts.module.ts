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
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';

import { SearchPipe } from '../../pipes/searchPipe';
import { SortPipe } from '../../pipes/sortPipe';

@NgModule({
    declarations: [
        FactComponent,
        CommentComponent,
        FactDetailComponent,
        FactsListComponent,
        FactUploadComponent,
        SearchPipe,
        SortPipe
    ],
    providers: [
        FactService,
        AuthenticationService
    ],
    imports: [
        SharedModule,
        ImageUploadModule,
        Ng2UploaderModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ],
    exports: [RouterModule]
})
export class FactsModule { }
