import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { UserMonitoringComponent } from './user-monitoring/user-monitoring.component';


@NgModule({
  declarations: [
    ActivityLogsComponent,
    UserMonitoringComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
