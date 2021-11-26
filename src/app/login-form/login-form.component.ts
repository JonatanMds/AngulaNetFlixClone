import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginRequestService } from '../login-request.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  
  status: boolean = true;
  loginForm:FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginRequestService) { }

  ngOnInit(): void {
     this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginService.login
  }

  toggleText() {
    this.status = !this.status;
  }

  ngOnSubmit() {
    console.log(this.loginForm.value);

    this.loginService.login(this.loginForm.value).subscribe( 
      (data:any) => { 
        console.log(data);
        localStorage.setItem('token', data.token );   
      });
  }

}
