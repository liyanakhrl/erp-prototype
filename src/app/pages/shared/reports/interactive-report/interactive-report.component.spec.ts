import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveReportComponent } from './interactive-report.component';

describe('InteractiveReportComponent', () => {
  let component: InteractiveReportComponent;
  let fixture: ComponentFixture<InteractiveReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractiveReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
