import { AuthenticationService } from './../../../../core/services/authentication.service';
import { CustomValidationService } from '@shared/services/custom-validation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Output() signUp =  new EventEmitter<User>();

  signUpForm: FormGroup;
  isSubmitted: boolean;

  constructor(
              private formBuilder: FormBuilder,
              private customValidator: CustomValidationService,
              ) { }

  ngOnInit(): void {
    this.initSignUpForm();
  }

  initSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]],
     },
     {
       validator: this.customValidator.MatchPassword('password','confirmPassword')
     });
  }

  get controls(){
    return this.signUpForm.controls;
  }

  onSubmit(){
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }

    else {
        this.signUp.emit(this.signUpForm.value);
    }

  }

}
