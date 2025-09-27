import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutenticacaoClientePage } from './autenticacao-cliente.page';

describe('AutenticacaoClientePage', () => {
  let component: AutenticacaoClientePage;
  let fixture: ComponentFixture<AutenticacaoClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacaoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
