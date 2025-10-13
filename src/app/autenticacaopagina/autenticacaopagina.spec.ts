import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autenticacaopagina } from './autenticacaopagina';

describe('Autenticacaopagina', () => {
  let component: Autenticacaopagina;
  let fixture: ComponentFixture<Autenticacaopagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Autenticacaopagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autenticacaopagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
