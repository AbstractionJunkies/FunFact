import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FactsListComponent } from './components/facts/fact-list.component';
import { FactUploadComponent } from './components/facts/fact-upload.component';
import { FactDetailComponent } from './components/facts/fact-detail.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuard } from './guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin-guard.service';

const routes: Routes = [
    { path: 'facts/all', component: FactsListComponent },
    { path: 'admin/users', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'upload', component: FactUploadComponent, canActivate: [AuthGuard] },
    { path: 'facts/fact/:id', component: FactDetailComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthenticationService, AuthGuard, AdminGuard]
})
export class AppRoutingModule { }
