import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdMarkerComponent } from './markers/std-marker/std-marker.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

//! IMPORTANT: MAKE SURE TO CALL: ng add @angular/material@16.2.0 @angular/cdk@16.2.0

@NgModule({
  declarations: [
    AppComponent,
    StdMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
