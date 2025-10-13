import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterTelefonePage } from './enter-telefone.page';

describe('EnterTelefonePage', () => {
  let component: EnterTelefonePage;
  let fixture: ComponentFixture<EnterTelefonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTelefonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
