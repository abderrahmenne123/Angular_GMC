import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCheckpointsComponent } from './my-checkpoints.component';

describe('MyCheckpointsComponent', () => {
  let component: MyCheckpointsComponent;
  let fixture: ComponentFixture<MyCheckpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCheckpointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCheckpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
