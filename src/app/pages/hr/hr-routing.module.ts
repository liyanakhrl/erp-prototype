import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { CompensationComponent } from './hr/compensation/compensation.component';
import { HrGeneralComponent } from './hr/hr-general/hr-general.component';
import { QarmaComponent } from './hr/qarma/qarma.component';

const routes: Routes = [
  { path: '', component: HrComponent },
  {
    path: 'compensation', title: 'Compensation', component: CompensationComponent,
  },
  { path: 'qarma', title: 'Qarma Points', component: QarmaComponent },
  { path: 'general', component: HrGeneralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
