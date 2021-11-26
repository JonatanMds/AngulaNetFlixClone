import { Component, OnInit} from '@angular/core';
import { GetUserService, UserInfo } from './get-user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  user: number = 1
  userInfoData: UserInfo = {} as UserInfo

  constructor(private getUserService:GetUserService){}
  
  ngOnInit(){
    this.getUserService.getUser(this.user).subscribe( result => this.userInfoData = result)    
  }

}
