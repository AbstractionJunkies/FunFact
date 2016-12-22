import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FactsModule } from './components/facts/facts.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { Ng2UploaderModule } from 'ng2-uploader';
import { AppComponent } from './app.component';
import { FactUploadComponent } from './components/facts/fact-upload.component';
import { FactsListComponent } from './components/facts/fact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FactUploadComponent,
    FactsListComponent
  ],
  imports: [
    ImageUploadModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FactsModule,
    Ng2UploaderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
