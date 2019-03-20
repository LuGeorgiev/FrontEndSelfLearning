import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
//import { AboutComponent } from './components/about/about.component';
//import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //AboutComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
