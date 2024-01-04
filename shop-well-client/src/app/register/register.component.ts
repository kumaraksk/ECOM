import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder ,Validators } from '@angular/forms'
import { CustomvalidationService } from '../services/customvalidation.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm:any;
  regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  successMsg:string="User Registered. Please confirm your account by visiting this <a href='http://localhost:4200/api/account/confirm-email/?userId=4ae91b1b-2b2e-4fb6-9b2c-07de6beb7e80&code=Q2ZESjhFMERVRnltNGp0QXZDSnFyLzhyOTAwNWFjSHZPQ3Fnd1d0ay9wbDFRZktsUmVnRlAydnVNSURGOCtBR25jZ2creHRrNXErbFdPWDZ0TFY0c0g1RXB5UEFQVmt3Rmw2RFhLKzY3WEZQMEFvM0tDbXc3Qk5iOWdteDVsNTIrejVubGFYaUJuZ2RpeXl5czE3MUxjSjJZclR5Qkg2TjZGOHRGMjQvYm9UTTFVZGVmRkxOSnBnZGRWemEwTi9DaHlQTGtneFFzWm9yOHhDVkZxekNCamFMbkdFREpWRGlLNExGaEZIaVJETFkrNklOMnFUeG1ad3pFeGNzUmlTeWxLOVEvdz09'>Url</a>";
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private userService:UserService
  ) {     this.successMsg='';}

  ngOnInit() {

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', [Validators.required,Validators.pattern(this.regex)]],
      confirmPassword: ['', [Validators.required]],
      username:['']
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.registerFormControl.username.setValue(this.registerFormControl.email.value)
    if (this.registerForm.valid) {
      this.userService.addUser(this.registerForm.value).subscribe((response:any )=>{
      ///var data= response as Response<string>;
      debugger;
       this.successMsg=response.Message;
       this.registerForm.reset();
      }
      )
    }
  }
}
