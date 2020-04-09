import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelParseComponent } from './excel-parse/excel-parse.component';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ExcelParseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
