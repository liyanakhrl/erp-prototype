import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  // KPI Data
  totalUsers: number = 1240;
  activeUsers: number = 940;
  pendingTasks: number = 35;

  // Recent Activities
  recentActivities = [
    { activity: 'John updated profile', time: '2 hours ago' },
    { activity: 'Jane submitted report', time: '1 day ago' },
    { activity: 'Emily created new task', time: '3 days ago' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  // Simulate data loading
  loadDashboardData(): void {
    // Example of fetching or processing data
    console.log('Dashboard data loaded');
  }

  // Export Report as CSV
  exportReport(): void {
    const data = [
      ['Metric', 'Value'],
      ['Total Users', this.totalUsers],
      ['Active Users', this.activeUsers],
      ['Pending Tasks', this.pendingTasks],
    ];

    const csvContent = data.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dashboard-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
