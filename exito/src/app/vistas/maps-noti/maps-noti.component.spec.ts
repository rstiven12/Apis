import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsNotiComponent } from './maps-noti.component';

describe('MapsNotiComponent', () => {
  let component: MapsNotiComponent;
  let fixture: ComponentFixture<MapsNotiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsNotiComponent]
    });
    fixture = TestBed.createComponent(MapsNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
