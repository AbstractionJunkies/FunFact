import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsListComponent } from './fact-list.component';
import { FactUploadComponent } from './fact-upload.component';
import { FactService } from './fact.service';
import { FactComponent } from './fact.component';
import { ImageUploadModule } from 'ng2-imageupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2UploaderModule } from 'ng2-uploader';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FactsListComponent },
    { path: 'upload', component: FactUploadComponent },
    { path: 'all', component: FactsListComponent }
];

@NgModule({
    declarations: [
        FactUploadComponent,
        FactsListComponent,
        FactComponent
    ],
    providers: [FactService],
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        ImageUploadModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        Ng2UploaderModule,
        ReactiveFormsModule,
        ],
    exports: [RouterModule]
})
export class FactsModule { }
