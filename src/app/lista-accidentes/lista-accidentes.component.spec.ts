import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAccidentesComponent } from './lista-accidentes.component';

describe('ListaAccidentesComponent', () => {
  let component: ListaAccidentesComponent;
  let fixture: ComponentFixture<ListaAccidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAccidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAccidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
