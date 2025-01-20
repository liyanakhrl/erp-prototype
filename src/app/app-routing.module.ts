import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component'; // Ensure correct import

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default redirect to 'dashboard',
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/shared/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
    data: { animation: 'CustomerPage' },
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/shared/orders/orders.module').then((m) => m.OrdersModule),
    data: { animation: 'OrderPage' },
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/shared/forms/forms.module').then((m) => m.FormsModule),
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
      import('./pages/shared/calendar/calendar.module').then((m) => m.CalendarModule),
    data: { animation: 'CalendarPage' },
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./pages/shared/media/media.module').then((m) => m.MediaModule),
    data: { animation: 'MediaPage' },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/shared/reports/reports.module').then((m) => m.ReportsModule),
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
      import('./pages/shared/analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
    data: { animation: 'GeneralPage' },
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
      import('./pages/shared/knowledge-based/knowledge-based.module').then(
        (m) => m.KnowledgeBasedModule
      ),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/shared/gallery/gallery.module').then((m) => m.GalleryModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((m) => m.SalesModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./pages/hr/hr.module').then((m) => m.HrModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'it',
    loadChildren: () =>
      import('./pages/it/it.module').then((m) => m.ItModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'finance',
    loadChildren: () =>
      import('./pages/finance/finance.module').then((m) => m.FinanceModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'marketing',
    loadChildren: () =>
      import('./pages/marketing/marketing.module').then((m) => m.MarketingModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'it',
    loadChildren: () =>
      import('./pages/it/it.module').then((m) => m.ItModule),
    data: { animation: 'KnowledgePage' },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
