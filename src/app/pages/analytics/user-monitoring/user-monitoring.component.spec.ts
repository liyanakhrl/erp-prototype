import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMonitoringComponent } from './user-monitoring.component';

describe('UserMonitoringComponent', () => {
  let component: UserMonitoringComponent;
  let fixture: ComponentFixture<UserMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
