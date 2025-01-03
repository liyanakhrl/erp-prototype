import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsRoutingModule } from './integrations-routing.module';
import { ApiManagementComponent } from './api-management/api-management.component';
import { ThirdPartyIntegrationComponent } from './third-party-integration/third-party-integration.component';


@NgModule({
  declarations: [
    ApiManagementComponent,
    ThirdPartyIntegrationComponent
  ],
  imports: [
    CommonModule,
    IntegrationsRoutingModule
  ]
})
export class IntegrationsModule { }
