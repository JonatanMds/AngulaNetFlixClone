import { Component, OnInit } from '@angular/core';
import { ProfileNameService } from '../profile-name.service';

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.scss']
})
export class UserWindowComponent implements OnInit {

  constructor(private profileNameService:ProfileNameService) { }

  ngOnInit(): void {
    console.log(this.profileNameService);
  }

}
