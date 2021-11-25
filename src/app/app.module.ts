import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalComponent } from './modal/modal.component';

import { MainPageComponent } from './main-page/main-page.component';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
<<<<<<< HEAD
=======
    MainPageComponent,
>>>>>>> 9598790f865ebff06fb18d5d9ffc3abadb006389
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
