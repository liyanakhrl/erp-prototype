import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceIndicatorComponent } from './presence-indicator.component';

describe('PresenceIndicatorComponent', () => {
  let component: PresenceIndicatorComponent;
  let fixture: ComponentFixture<PresenceIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresenceIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
