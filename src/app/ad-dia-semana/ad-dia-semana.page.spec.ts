import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdDiaSemanaPage } from './ad-dia-semana.page';

describe('AdDiaSemanaPage', () => {
  let component: AdDiaSemanaPage;
  let fixture: ComponentFixture<AdDiaSemanaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDiaSemanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
