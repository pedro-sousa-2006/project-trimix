import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddClienteListaPage } from './add-cliente-lista.page';

describe('AddClienteListaPage', () => {
  let component: AddClienteListaPage;
  let fixture: ComponentFixture<AddClienteListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClienteListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
