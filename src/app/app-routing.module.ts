import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
