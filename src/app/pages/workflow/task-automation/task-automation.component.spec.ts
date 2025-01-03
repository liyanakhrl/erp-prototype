import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAutomationComponent } from './task-automation.component';

describe('TaskAutomationComponent', () => {
  let component: TaskAutomationComponent;
  let fixture: ComponentFixture<TaskAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
