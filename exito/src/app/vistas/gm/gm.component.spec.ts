import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmComponent } from './gm.component';

describe('GmComponent', () => {
  let component: GmComponent;
  let fixture: ComponentFixture<GmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmComponent]
    });
    fixture = TestBed.createComponent(GmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
