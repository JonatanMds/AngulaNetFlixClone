import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  urlAvatarImage:string =""
  nameUser:string =""


  constructor() {
    this.urlAvatarImage
    this.nameUser

   }

  ngOnInit(): void {
  }

}
