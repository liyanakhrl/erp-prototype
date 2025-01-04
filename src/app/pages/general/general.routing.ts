import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';
import { ArticleComponent } from './article/article.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  { path: '', component: OrganizationChartComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'wall', component: WallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
