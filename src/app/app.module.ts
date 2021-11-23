import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ModalComponent } from './modal/modal.component';
=======
import { LoginFormComponent } from './login-form/login-form.component';
>>>>>>> aec6d38e8051dcc85047e773aec388c2ffc90ea4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ModalComponent,
    
=======
    LoginFormComponent
>>>>>>> aec6d38e8051dcc85047e773aec388c2ffc90ea4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
