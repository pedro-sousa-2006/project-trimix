import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenAppPage } from './open-app.page';

describe('OpenAppPage', () => {
  let component: OpenAppPage;
  let fixture: ComponentFixture<OpenAppPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
