import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterContaPage } from './enter-conta.page';

describe('EnterContaPage', () => {
  let component: EnterContaPage;
  let fixture: ComponentFixture<EnterContaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
