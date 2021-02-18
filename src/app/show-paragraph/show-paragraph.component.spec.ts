import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParagraphComponent } from './show-paragraph.component';

describe('ShowParagraphComponent', () => {
  let component: ShowParagraphComponent;
  let fixture: ComponentFixture<ShowParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
