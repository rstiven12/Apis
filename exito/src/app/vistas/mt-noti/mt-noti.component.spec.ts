import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtNotiComponent } from './mt-noti.component';

describe('MtNotiComponent', () => {
  let component: MtNotiComponent;
  let fixture: ComponentFixture<MtNotiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MtNotiComponent]
    });
    fixture = TestBed.createComponent(MtNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
