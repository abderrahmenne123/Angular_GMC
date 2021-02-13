import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExpComponent } from './ng-class-exp.component';

describe('NgClassExpComponent', () => {
  let component: NgClassExpComponent;
  let fixture: ComponentFixture<NgClassExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
