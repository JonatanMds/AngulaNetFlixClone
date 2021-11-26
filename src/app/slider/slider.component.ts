import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { GetMoviesService, GetMoviesData } from './get-movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slideData: String[] = []
  movieList: GetMoviesData[] = []
  sliderLoading: Boolean = true

  pos = { top: 0, left: 0, x: 0, y: 0 };
  sliderElement : HTMLElement = {} as HTMLElement
  mouseMoveBound:any
  mouseUpBound:any

  constructor(private elementRef:ElementRef, private getMovies:GetMoviesService) {}

  ngOnInit(){
    this.mouseMoveBound = this.mouseMoveHandle.bind(this)
    this.mouseUpBound = this.mouseUpHandle.bind(this)

    this.slideData.forEach( item => {
      this.getMovies.getMoviesService(item).subscribe( result => this.movieList.push(result))
    })
    this.sliderLoading = false
  }

  ngAfterViewInit() {
    this.sliderElement = this.elementRef.nativeElement.querySelector('.slider')
    this.sliderElement.addEventListener('mousedown', this.mouseDownHandle.bind(this));
  }

  mouseDownHandle(event:MouseEvent){
    this.sliderElement.style.cursor = 'grabbing';
    this.sliderElement.style.userSelect = 'none';

    this.pos = {
      left: this.sliderElement.scrollLeft,
      top: this.sliderElement.scrollTop,
      x: event.clientX,
      y: event.clientY,
    };

    this.sliderElement.addEventListener('mousemove', this.mouseMoveBound, false)
    this.sliderElement.addEventListener('mouseup', this.mouseUpBound, false)
  }

  mouseMoveHandle(event:MouseEvent){
    const dx = event.clientX - this.pos.x;
    const dy = event.clientY - this.pos.y;

    this.sliderElement.scrollTop = this.pos.top - dy;
    this.sliderElement.scrollLeft = this.pos.left - dx;
  }

  mouseUpHandle(){
    this.sliderElement.style.cursor = 'grab';
    this.sliderElement.style.removeProperty('user-select');

    this.sliderElement.removeEventListener('mousemove', this.mouseMoveBound, false)
    this.sliderElement.removeEventListener('mouseup', this.mouseUpBound,false )
  }

}
