import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiemposComponent } from './tiempos.component';

describe('TiemposComponent', () => {
  let component: TiemposComponent;
  let fixture: ComponentFixture<TiemposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiemposComponent]
    });
    fixture = TestBed.createComponent(TiemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
