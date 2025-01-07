import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
    data: { animation: 'CustomerPage' },
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule),
    data: { animation: 'OrderPage' },
  }, // Lazy-loaded routes for Pages
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule),
    data: { animation: 'FormPage' },
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('./pages/workflow/workflow.module').then((m) => m.WorkflowModule),
    data: { animation: 'WorkflowPage' },
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then((m) => m.CalendarModule),
    data: { animation: 'CalendarPage' },
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./pages/media/media.module').then((m) => m.MediaModule),
    data: { animation: 'MediaPage' },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then((m) => m.ReportsModule),
    data: { animation: 'ReportPage' },
  },
  {
    path: 'integrations',
    loadChildren: () =>
      import('./pages/integrations/integrations.module').then(
        (m) => m.IntegrationsModule
      ),
    data: { animation: 'IntegrationPage' },
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./pages/analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
    data: { animation: 'AnalyticsPage' },
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./pages/general/general.module').then((m) => m.GeneralModule),
    data: { animation: 'GeneralPage' },
  },
  {
    path: 'knowledge-based',
    loadChildren: () =>
      import('./pages/knowledge-based/knowledge-based.module').then(
        (m) => m.KnowledgeBasedModule
      ),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then(
        (m) => m.GalleryModule
      ),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
    data: { animation: 'DashboardPage' },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: { animation: 'DashboardPage' },
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for 404 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
