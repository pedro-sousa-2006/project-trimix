import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaHorariosPage } from './lista-horarios.page';

describe('ListaHorariosPage', () => {
  let component: ListaHorariosPage;
  let fixture: ComponentFixture<ListaHorariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
