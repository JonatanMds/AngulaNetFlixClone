import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginRequestService } from '../login-request.service';
import { Router } from '@angular/router';
import { ProfileNameService } from '../profile-name.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  status: boolean = true;
  loginForm:FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginRequestService, private router: Router, private ProfileName: ProfileNameService) { }

  validator(control: AbstractControl){
    const email = Validators.email(control)
    const number = Validators.pattern("[0-9]{10,11}")(control)
    let duplicates = Validators.pattern(/(.)\1{9,10}/)(control)
    duplicates = duplicates == null ? {duplicates:true} : null

    if(email == null || (number == null && duplicates == null)) {
      return null
    } else {
      return {...email, ...number, ...duplicates}
    }
  }

  ngOnInit(): void {
    this.isLogin()
     this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.validator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleText() {
    this.status = !this.status;
  }

  ngOnSubmit() {
    console.log(this.loginForm)
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res: any) => {
        this.ProfileName = res.users;
        localStorage.setItem('token', res.token );   
        console.log(this.ProfileName)
        this.router.navigate(['/user']);
        }
      )
    }
  }

  isLogin() {
    localStorage.getItem('token') 
      ? this.router.navigate(['/user'])
      : null
  }


}
