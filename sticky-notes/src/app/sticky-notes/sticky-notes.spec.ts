import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotes } from './sticky-notes';

describe('StickyNotes', () => {
  let component: StickyNotes;
  let fixture: ComponentFixture<StickyNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyNotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
