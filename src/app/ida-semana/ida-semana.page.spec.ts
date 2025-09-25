import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdaSemanaPage } from './ida-semana.page';

describe('IdaSemanaPage', () => {
  let component: IdaSemanaPage;
  let fixture: ComponentFixture<IdaSemanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IdaSemanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
