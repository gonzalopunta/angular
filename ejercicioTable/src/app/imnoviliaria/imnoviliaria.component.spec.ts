import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImnoviliariaComponent } from './imnoviliaria.component';

describe('ImnoviliariaComponent', () => {
  let component: ImnoviliariaComponent;
  let fixture: ComponentFixture<ImnoviliariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImnoviliariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImnoviliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
