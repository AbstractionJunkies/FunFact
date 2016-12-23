import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FactsModule } from './components/facts/facts.module';
import { AuthenticationModule } from './authentication/authentication.module'

import { AppComponent } from './app.component';

import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { HomeComponentService } from './home/home.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    FactsModule,
    AuthenticationModule
  ],
  providers: [HomeComponentService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
