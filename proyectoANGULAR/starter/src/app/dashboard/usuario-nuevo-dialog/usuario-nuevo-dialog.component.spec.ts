import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNuevoDialogComponent } from './usuario-nuevo-dialog.component';

describe('UsuarioNuevoDialogComponent', () => {
  let component: UsuarioNuevoDialogComponent;
  let fixture: ComponentFixture<UsuarioNuevoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNuevoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNuevoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
