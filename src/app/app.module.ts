import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {FactsModule} from './components/facts/facts.module';
import {UserModule} from './components/user/user.module';
import {AuthenticationModule} from './authentication/authentication.module';


import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';


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
    AuthenticationModule,
    UserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
