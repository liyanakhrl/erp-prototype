import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersModule),
  }, // Lazy-loaded routes for Pages
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('./pages/workflow/workflow.module').then((m) => m.WorkflowModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./pages/media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'integrations',
    loadChildren: () =>
      import('./pages/integrations/integrations.module').then(
        (m) => m.IntegrationsModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./pages/analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./pages/analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
  },
  {
    path: 'knowledge-based',
    loadChildren: () =>
      import('./pages/knowledge-based/knowledge-based.module').then(
        (m) => m.KnowledgeBasedModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
