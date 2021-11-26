import { Component, EventEmitter, Input, OnInit, Output, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() hidenModal: boolean = false
  @Output() hidenModalChange = new EventEmitter()

  cardImage: string =""
  cardTitle : string = ""
  percentRelevance: number = 0
  year: number = 0
  minAge: number = 0
  time: string = ""
  description: string = ""
  cast: string  = ""
  genere: string = ""
  scenesAndMoments: string = ""

  objectFilme = {
    "cardImage": "https://occ-0-782-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSKVUiNlI2oEN2Iz_DrKznVcOuKb2yOn4sretHhVtD8ZZ8pQxHQd7oFwdBv4H6SEYIPNcSE3BY5xHZD0W5oCMnym-2VdqV5If6E_wesDvNjx5B1k-GG8K4Xh0kdRpPsYtwooJtajb1scR4FJOWtDipz-TQinJSL-FWI85qkPyw596EfoFHZbCsg.jpg?r=40f",
    "titleImage": "https://occ-0-782-185.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZDps0iIQpLs8QwPcuCmNKY5eFanBALbIyNcXuMdxLWkA7oZyVS5Q-lkds90XnxxuKLTcOj8BiDADleGQm2D93RfdgEQfcZyTBZqBjpYK42_Obb7FmAz4WGrO_uJAKF6AVIbrrh-_D-uFRySpLgyNP5PkO39dF3n5c6P41UEd5BO.webp?r=eb2",
    "backgroundImage": "https://istoe.com.br/wp-content/uploads/sites/14/2021/10/alerta-vermelho.jpg",
    "relevance": 99,
    "year": 2021,
    "minAge": 12,
    "time": 117,
    "season": null,
    "description": "Um agente do FBI persegue o ladrão de arte mais procurado do mundo. Ele só não esperava ter seu alvo como parceiro para prender uma bandida muito esperta.",
    "cast": ["Dwayne Johnson", "Ryan Reynolds", "Gal Gadot"],
    "genre": ["ação e aventura", "comédia", "policiais"],
    "scenes": ["irreverentes", "empolgantes"]
}

  click: any

  constructor() { }

  ngOnInit(): void {

    this.cardImage = this.objectFilme.backgroundImage

    this.cardTitle = this.objectFilme.titleImage

    this.percentRelevance = this.convertPercent(this.objectFilme.relevance)

    this.year = this.objectFilme.year

    this.minAge = this.objectFilme.minAge

    this.time = this.minutesToHours( this.objectFilme.time)

    this.description = this.objectFilme.description

    this.cast = this.transformText( this.objectFilme.cast)

    this.genere = this.transformText( this.objectFilme.genre)

    this.scenesAndMoments =  this.transformText(this.objectFilme.scenes)
  }

  closeModalInf(){
    this.hidenModalChange.emit(this.hidenModal = false)
  }

  convertPercent(item:number){
    return item/100
  }

  minutesToHours(item:number){
    const hours = Math.trunc( item/60)
    const minut = item%60
    const textHous = (`00${hours}`).slice(-2)
    const textMin = (`00${minut}`).slice(-2)
    return `${textHous }h ${textMin} min`
  }

  transformText (item:string[]){
    const textInfo= item.join(", ")
    return textInfo
  }




}
