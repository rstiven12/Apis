import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { EditarComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarComponent]
    });
    fixture = TestBed.createComponent(EditarComponent);
    fixture = HttpClient.apply(EditarComponent);
    fixture = HttpHeaders.apply(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
