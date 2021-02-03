import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }


  MatchPassword(password: string, confirmPass: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPass];
      if (!passwordControl || !confirmPasswordControl) { return ; }
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) { return; }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else { confirmPasswordControl.setErrors(null); }
    }
  }

}
