import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasUltimasComponent } from './peliculas-ultimas.component';

describe('PeliculasUltimasComponent', () => {
  let component: PeliculasUltimasComponent;
  let fixture: ComponentFixture<PeliculasUltimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasUltimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasUltimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
