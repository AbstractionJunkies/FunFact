import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsListComponent } from './fact-list.component';
import { FactUploadComponent } from './fact-upload.component';
import { FactService } from './fact.service';
import { FactDetailComponent } from './fact-detail.component';
import { AuthenticationService } from '../../authentication/authentication.service';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FactsListComponent },
    { path: 'upload', component: FactUploadComponent },
    { path: 'all', component: FactsListComponent },
    { path: 'facts/fact/:id', component: FactDetailComponent }
];

@NgModule({
    providers: [FactService, AuthenticationService],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class FactsModule { }
