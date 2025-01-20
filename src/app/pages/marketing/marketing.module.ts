import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module'; 
import { MarketingComponent } from './marketing/marketing.component';


@NgModule({
  declarations: [
    MarketingComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
