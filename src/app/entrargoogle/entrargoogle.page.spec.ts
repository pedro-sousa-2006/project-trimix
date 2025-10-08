import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrargooglePage } from './entrargoogle.page';

describe('EntrargooglePage', () => {
  let component: EntrargooglePage;
  let fixture: ComponentFixture<EntrargooglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrargooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
