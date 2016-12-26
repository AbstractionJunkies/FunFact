import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FactsModule } from './components/facts/facts.module';
import { AuthenticationModule } from './authentication/authentication.module'


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FactDetailComponent } from './components/facts/fact-detail.component';

import { SearchPipe } from './pipes/searchPipe';

import { CommentComponent } from './components/facts/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
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
