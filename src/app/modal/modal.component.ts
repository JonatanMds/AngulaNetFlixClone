import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() stateModalInf = true

  @Output() stateModalInfChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onStateModalInfChange(){
    this.stateModalInf= false
    this.stateModalInfChange.emit({ stateModalInfChange: this.stateModalInf})
  }

}
