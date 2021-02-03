import { CustomValidationService } from '@shared/services/custom-validation.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output()
  onFormSubmit = new EventEmitter<User>();

  @Input()
  user: User;

  userCreateForm: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder, private customValidatorService: CustomValidationService) { }

  ngOnInit(): void {

    this.initUserForm();

    if(this.user){
      this.initUserUpdateForm();
    }
  }


  onSubmit(): void {
    console.log('is submitted ' + this.isSubmitted)
    this.isSubmitted = true;

    if (this.userCreateForm.invalid) {
        return;
    }
    else {
      let _user = this.userCreateForm.value;
      _user.id = this.user.id;
      this.onFormSubmit.emit(_user);
    }

  }

  get controls(){
    return this.userCreateForm.controls;
  }

  initUserForm(): void {
    this.userCreateForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
     });
  }

  initUserUpdateForm(): void {
    //this.userCreateForm.setValue(this.user);
    this.userCreateForm.controls['firstname'].setValue(this.user.firstname);
    this.userCreateForm.controls['username'].setValue(this.user.username);
    this.userCreateForm.controls['lastname'].setValue(this.user.lastname);
    this.userCreateForm.controls['email'].setValue(this.user.email);
  }


}
