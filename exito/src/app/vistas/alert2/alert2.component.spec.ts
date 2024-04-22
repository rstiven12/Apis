import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert2Component } from './alert2.component';

describe('Alert2Component', () => {
  let component: Alert2Component;
  let fixture: ComponentFixture<Alert2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alert2Component]
    });
    fixture = TestBed.createComponent(Alert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});