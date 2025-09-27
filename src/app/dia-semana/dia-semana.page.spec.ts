import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiaSemanaPage } from './dia-semana.page';

describe('DiaSemanaPage', () => {
  let component: DiaSemanaPage;
  let fixture: ComponentFixture<DiaSemanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaSemanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
