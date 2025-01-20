import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItRoutingModule } from './it-routing.module';
import { ItComponent } from './it/it.component';


@NgModule({
  declarations: [
    ItComponent
  ],
  imports: [
    CommonModule,
    ItRoutingModule
  ]
})
export class ItModule { }
