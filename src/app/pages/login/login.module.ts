import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { PartialModule } from '../../partial/partial.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PartialModule
  ]
})
export class LoginModule { }
