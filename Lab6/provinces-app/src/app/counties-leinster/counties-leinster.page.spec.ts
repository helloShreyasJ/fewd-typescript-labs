import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountiesLeinsterPage } from './counties-leinster.page';

describe('CountiesLeinsterPage', () => {
  let component: CountiesLeinsterPage;
  let fixture: ComponentFixture<CountiesLeinsterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountiesLeinsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
