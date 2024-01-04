import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
 private userNames :Array<string>=[]
  constructor (private userService:UserService){
     this.getUserNames();
  }
    
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        { invalidPassword: false }
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? { invalidPassword: false } : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors["passwordMismatch"]) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
      return;
    }
  }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {
    return (this.userNames.indexOf(userName) > -1);
  }
  getUserNames(){
    this.userService.getUserNames().subscribe((data:any ) => {
      this.userNames = data.data;
      console.log(this.userNames);
  })
  }
}