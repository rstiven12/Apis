import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosProfileComponent } from './contactos-profile.component';

describe('ContactosProfileComponent', () => {
  let component: ContactosProfileComponent;
  let fixture: ComponentFixture<ContactosProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactosProfileComponent]
    });
    fixture = TestBed.createComponent(ContactosProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
