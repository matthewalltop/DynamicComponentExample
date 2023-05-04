import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersWidgetComponent } from './numbers-widget.component';

describe('NumbersWidgetComponent', () => {
  let component: NumbersWidgetComponent;
  let fixture: ComponentFixture<NumbersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
