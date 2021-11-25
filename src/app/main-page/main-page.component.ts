import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  sliderPosition:number = 0

  @ViewChild('sliderContainer') slidecontainer: ElementRef<HTMLElement> = {} as ElementRef

  sliderRight(){
    if(this.sliderPosition != 0){
      this.sliderPosition += window.innerWidth
      this.slidecontainer.nativeElement.style.transform = `translateX(${this.sliderPosition}px)`
      //console.log(this.sliderPosition)
      console.log(this.slidecontainer)
    }
  }

  sliderLeft(){
    console.log(this.sliderPosition)
    this.sliderPosition -= window.innerWidth
    this.slidecontainer.nativeElement.style.transform = `translateX(${this.sliderPosition}px)`
    console.log(this.sliderPosition)
    console.log(`tecla: ${window.innerWidth} container: ${this.slidecontainer.nativeElement.offsetWidth}`)
  }

  ngOnInit(){
    
  }

}
