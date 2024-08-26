import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdMarkerComponent } from './markers/std-marker/std-marker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { ModifyMarkerDialogComponent } from './markers/modify-marker-dialog/modify-marker-dialog.component'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


//! IMPORTANT: MAKE SURE TO CALL: ng add @angular/material@16.2.0 @angular/cdk@16.2.0

@NgModule({
  declarations: [
    AppComponent,
    StdMarkerComponent,
    ModifyMarkerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
