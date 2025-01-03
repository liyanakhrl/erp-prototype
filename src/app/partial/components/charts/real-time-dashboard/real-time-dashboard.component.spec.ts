import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDashboardComponent } from './real-time-dashboard.component';

describe('RealTimeDashboardComponent', () => {
  let component: RealTimeDashboardComponent;
  let fixture: ComponentFixture<RealTimeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealTimeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
