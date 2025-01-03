import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { ApprovalWorkflowComponent } from './approval-workflow/approval-workflow.component';
import { TaskAutomationComponent } from './task-automation/task-automation.component';


@NgModule({
  declarations: [
    ApprovalWorkflowComponent,
    TaskAutomationComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
