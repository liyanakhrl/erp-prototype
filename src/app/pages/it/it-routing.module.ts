import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItComponent } from './it/it.component';

const routes: Routes = [{ path: '', component: ItComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItRoutingModule { }
