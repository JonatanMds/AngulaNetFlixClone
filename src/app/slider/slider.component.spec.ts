import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/home/home.component.spec.ts
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
=======
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
>>>>>>> 2ae30800578a10bcabbffd0060ed48dd72de3a4a:src/app/slider/slider.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/home/home.component.spec.ts
    fixture = TestBed.createComponent(HomeComponent);
=======
    fixture = TestBed.createComponent(SliderComponent);
>>>>>>> 2ae30800578a10bcabbffd0060ed48dd72de3a4a:src/app/slider/slider.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
