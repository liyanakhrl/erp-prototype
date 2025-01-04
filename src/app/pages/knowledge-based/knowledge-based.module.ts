import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialModule } from '../../partial/partial.module';
import { KnowledgeBasedRouting } from './knowledge-based.routing';
import { KnowledgeBasedComponent } from './knowledge-based.component';



@NgModule({
  declarations: [KnowledgeBasedComponent],
  imports: [
    CommonModule,
    PartialModule,
    KnowledgeBasedRouting
  ]
})
export class KnowledgeBasedModule { }
