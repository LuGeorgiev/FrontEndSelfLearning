import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUrlValidDirective } from './image-url-valid.directive';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ImageUrlValidDirective,
    RegisterReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
