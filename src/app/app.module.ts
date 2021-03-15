import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { SkeletonModule } from '@skeleton/skeleton.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Component } from './layouts/vertical/layout1/layout1.component';
import { Layout2Component } from './layouts/vertical/layout2/layout2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from '../@skeleton/components/progress-bar/progress-bar.component';

import { config } from 'app/skelton-config';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    // Skeleton modules
    SkeletonModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
