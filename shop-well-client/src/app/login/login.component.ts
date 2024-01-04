import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm:any;
  constructor( private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private userService:UserService,
    private router:Router
    ) { 
   
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', [Validators.required]],
    }
    );
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
      this.userService.login(this.loginForm.value).subscribe((response:any )=>{
       ///this.toastsManager.success(response.message);
       localStorage.setItem("jwt", response.data.jwToken); 
       this.router.navigate(['product']);
      }
      )
  }
 
}
