import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';
import { CompensationComponent } from './hr/compensation/compensation.component';
import { HrGeneralComponent } from './hr/hr-general/hr-general.component';


@NgModule({
  declarations: [
    HrComponent,
    CompensationComponent,
    HrGeneralComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
