import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaTracker } from './tea-tracker';

describe('TeaTracker', () => {
  let component: TeaTracker;
  let fixture: ComponentFixture<TeaTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
