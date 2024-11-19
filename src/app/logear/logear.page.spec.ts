import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogearPage } from './logear.page';

describe('LogearPage', () => {
  let component: LogearPage;
  let fixture: ComponentFixture<LogearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
