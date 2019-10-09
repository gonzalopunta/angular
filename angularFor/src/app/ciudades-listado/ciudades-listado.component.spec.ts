import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesListadoComponent } from './ciudades-listado.component';

describe('CiudadesListadoComponent', () => {
  let component: CiudadesListadoComponent;
  let fixture: ComponentFixture<CiudadesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
