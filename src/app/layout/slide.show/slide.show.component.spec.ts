import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide.ShowComponent } from './slide.show.component';

describe('Slide.ShowComponent', () => {
  let component: Slide.ShowComponent;
  let fixture: ComponentFixture<Slide.ShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide.ShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide.ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
