import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FactsModule } from './components/facts/facts.module';
import { AuthenticationModule } from './authentication/authentication.module'

import { AppComponent } from './app.component';

import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,  
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FactsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
