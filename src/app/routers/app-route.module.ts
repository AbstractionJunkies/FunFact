import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsListComponent } from '../components/fact-list.component';
import { AboutComponent } from '../components/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FactsListComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    declarations: [FactsListComponent, AboutComponent],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouteModule { }