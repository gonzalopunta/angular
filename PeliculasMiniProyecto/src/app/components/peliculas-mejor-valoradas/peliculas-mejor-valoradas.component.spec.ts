import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasMejorValoradasComponent } from './peliculas-mejor-valoradas.component';

describe('PeliculasMejorValoradasComponent', () => {
  let component: PeliculasMejorValoradasComponent;
  let fixture: ComponentFixture<PeliculasMejorValoradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasMejorValoradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasMejorValoradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
