import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  status: boolean = true;

  ngOnInit(): void {
  }

  toggleText() {
    this.status = !this.status;
  }


}
