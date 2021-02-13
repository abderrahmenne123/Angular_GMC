import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesChangeComponent } from './themes-change.component';

describe('ThemesChangeComponent', () => {
  let component: ThemesChangeComponent;
  let fixture: ComponentFixture<ThemesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
