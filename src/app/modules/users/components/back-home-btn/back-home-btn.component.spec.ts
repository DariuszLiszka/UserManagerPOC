import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHomeBtnComponent } from './back-home-btn.component';

describe('BackHomeBtnComponent', () => {
  let component: BackHomeBtnComponent;
  let fixture: ComponentFixture<BackHomeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackHomeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackHomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
