import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScheduleComponent } from './register-schedule.component';

describe('RegisterScheduleComponent', () => {
  let component: RegisterScheduleComponent;
  let fixture: ComponentFixture<RegisterScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
