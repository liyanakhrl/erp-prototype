import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { PdfReportComponent } from './pdf-report/pdf-report.component';
import { InteractiveReportComponent } from './interactive-report/interactive-report.component';


@NgModule({
  declarations: [
    PdfReportComponent,
    InteractiveReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
