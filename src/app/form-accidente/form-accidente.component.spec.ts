import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccidenteComponent } from './form-accidente.component';

describe('FormAccidenteComponent', () => {
  let component: FormAccidenteComponent;
  let fixture: ComponentFixture<FormAccidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
