import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormBtnComponent } from './show-form-btn.component';

describe('ShowFormBtnComponent', () => {
  let component: ShowFormBtnComponent;
  let fixture: ComponentFixture<ShowFormBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
