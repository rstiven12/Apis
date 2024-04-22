import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpComponent } from './notp.component';

describe('NotpComponent', () => {
  let component: NotpComponent;
  let fixture: ComponentFixture<NotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotpComponent]
    });
    fixture = TestBed.createComponent(NotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
