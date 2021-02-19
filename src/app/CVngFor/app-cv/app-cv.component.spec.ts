import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCvComponent } from './app-cv.component';

describe('AppCvComponent', () => {
  let component: AppCvComponent;
  let fixture: ComponentFixture<AppCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
