import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsInicioComponent } from './maps-inicio.component';

describe('MapsInicioComponent', () => {
  let component: MapsInicioComponent;
  let fixture: ComponentFixture<MapsInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsInicioComponent]
    });
    fixture = TestBed.createComponent(MapsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
