import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class LoginModule { }
