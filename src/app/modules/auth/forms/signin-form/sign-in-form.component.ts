import { Router } from '@angular/router';
import { User } from '@shared/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  @Output() signIn =  new EventEmitter<User>();

  signInForm:FormGroup;
  isSubmitted

  constructor( private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.initSignInForm();
  }

  initSignInForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     });
  }

  get controls(){
    return this.signInForm.controls;
  }

  onSubmit(){

    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
        return;
    }

    else {

      this.signIn.emit(this.signInForm.value);

    }

  }

}
