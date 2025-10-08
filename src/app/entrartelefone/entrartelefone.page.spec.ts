import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrartelefonePage } from './entrartelefone.page';

describe('EntrartelefonePage', () => {
  let component: EntrartelefonePage;
  let fixture: ComponentFixture<EntrartelefonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrartelefonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
