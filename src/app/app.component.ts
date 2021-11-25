import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hidenModalInf= false

  showModalInf(){
    this.hidenModalInf= true
  }

  onStateModalIn(evento: any ){
    console.log(evento)
    this.hidenModalInf = evento.value
  }
}
