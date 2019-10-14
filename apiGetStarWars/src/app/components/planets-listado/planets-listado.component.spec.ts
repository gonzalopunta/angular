import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListadoComponent } from './planets-listado.component';

describe('PlanetsListadoComponent', () => {
  let component: PlanetsListadoComponent;
  let fixture: ComponentFixture<PlanetsListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
