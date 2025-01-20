import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeBasedComponent } from './knowledge-based.component';

const routes: Routes = [{ path: '', component: KnowledgeBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeBasedRouting { }
