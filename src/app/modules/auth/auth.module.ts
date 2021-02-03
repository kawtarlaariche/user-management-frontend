import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/signin/sign-in.component';
import { SignUpComponent } from './pages/signup/sign-up.component';
import { SignUpFormComponent } from './forms/signup-form/sign-up-form.component';
import { SignInFormComponent } from './forms/signin-form/sign-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignUpFormComponent, SignInFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
