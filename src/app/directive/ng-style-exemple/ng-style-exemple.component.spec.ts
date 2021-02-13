import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExempleComponent } from './ng-style-exemple.component';

describe('NgStyleExempleComponent', () => {
  let component: NgStyleExempleComponent;
  let fixture: ComponentFixture<NgStyleExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
