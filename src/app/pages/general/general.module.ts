import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartialModule } from '../../partial/partial.module';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { GeneralRoutingModule } from './general.routing';
import { ArticleComponent } from './article/article.component';
import { WallComponent } from './wall/wall.component';


@NgModule({
  declarations: [
    OrganizationChartComponent,
    ArticleComponent,
    WallComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    PartialModule
  ]
})
export class GeneralModule { }
