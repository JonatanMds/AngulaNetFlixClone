import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   hidenModal: boolean = false

  showModalInfo(){
    this.hidenModal = true
  }
}
