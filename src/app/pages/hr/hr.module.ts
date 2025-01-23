import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr/hr.component';
import { CompensationComponent } from './hr/compensation/compensation.component';
import { HrGeneralComponent } from './hr/hr-general/hr-general.component';
import { QarmaComponent } from './hr/qarma/qarma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartialModule } from '../../partial/partial.module';


@NgModule({
  declarations: [
    HrComponent,
    CompensationComponent,
    HrGeneralComponent,
    QarmaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HrRoutingModule,
    PartialModule
  ],
  exports:[
    QarmaComponent
  ]
})
export class HrModule { }
