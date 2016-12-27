import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactsListComponent } from './components/facts/fact-list.component';
import { FactUploadComponent } from './components/facts/fact-upload.component';
import { FactDetailComponent } from './components/facts/fact-detail.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'home', component: FactsListComponent },
    { path: 'upload', component: FactUploadComponent },
    { path: 'facts/fact/:id', component: FactDetailComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export { routes }