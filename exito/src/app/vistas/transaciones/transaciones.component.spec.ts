import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacionesComponent } from './transaciones.component';

describe('TransacionesComponent', () => {
  let component: TransacionesComponent;
  let fixture: ComponentFixture<TransacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransacionesComponent]
    });
    fixture = TestBed.createComponent(TransacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
