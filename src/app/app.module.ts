import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FactsModule } from './components/facts/facts.module';
import { UserModule } from './components/user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

import {HomeModule} from "./home/home.module";
import {KnowledgePieChartComponent} from "./home/chart-component/knowledge-pie-chart.components";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    KnowledgePieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FactsModule,
    HomeModule,
    AuthenticationModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
