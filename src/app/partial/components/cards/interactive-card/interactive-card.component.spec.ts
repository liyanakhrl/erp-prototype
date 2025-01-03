import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCardComponent } from './interactive-card.component';

describe('InteractiveCardComponent', () => {
  let component: InteractiveCardComponent;
  let fixture: ComponentFixture<InteractiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractiveCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
