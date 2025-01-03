import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReportComponent } from './pdf-report.component';

describe('PdfReportComponent', () => {
  let component: PdfReportComponent;
  let fixture: ComponentFixture<PdfReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
