import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritColorComponent } from './my-favorit-color.component';

describe('MyFavoritColorComponent', () => {
  let component: MyFavoritColorComponent;
  let fixture: ComponentFixture<MyFavoritColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavoritColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoritColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
