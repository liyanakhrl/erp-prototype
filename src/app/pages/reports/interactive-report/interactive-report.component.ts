import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-report',
  standalone: false,

  templateUrl: './interactive-report.component.html',
  styleUrl: './interactive-report.component.scss',
})
export class InteractiveReportComponent implements OnInit {
  // Report data
  reports = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      status: 'Active',
      date: new Date('2024-01-10'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      status: 'Inactive',
      date: new Date('2024-01-12'),
    },
    {
      id: 3,
      name: 'Emily Johnson',
      email: 'emilyj@example.com',
      status: 'Active',
      date: new Date('2024-01-14'),
    },
    {
      id: 4,
      name: 'Michael Brown',
      email: 'michaelb@example.com',
      status: 'Inactive',
      date: new Date('2024-01-15'),
    },
  ];

  // Filters
  startDate: string = '';
  endDate: string = '';
  statusFilter: string = 'All';
  searchQuery: string = '';

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;

  ngOnInit(): void {
    this.filterReports();
  }

  /**
   * Filter reports based on date, status, and search query.
   */
  filterReports(): any[] {
    return this.reports.filter((report) => {
      const matchesDate =
        (!this.startDate ||
          new Date(report.date) >= new Date(this.startDate)) &&
        (!this.endDate || new Date(report.date) <= new Date(this.endDate));
      const matchesStatus =
        this.statusFilter === 'All' || report.status === this.statusFilter;
      const matchesSearch =
        report.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        report.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesDate && matchesStatus && matchesSearch;
    });
  }

  /**
   * Navigate to the previous page.
   */
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  /**
   * Navigate to the next page.
   */
  nextPage(): void {
    const totalPages = Math.ceil(this.reports.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  /**
   * Export report data.
   */
  exportReport(): void {
    const filteredReports = this.filterReports();
    const csvContent = filteredReports
      .map(
        (r) =>
          `${r.id},${r.name},${r.email},${
            r.status
          },${r.date.toLocaleDateString()}`
      )
      .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Edit report
   */
  editReport(id: number): void {
    console.log(`Edit report with ID: ${id}`);
  }

  /**
   * Delete report
   */
  deleteReport(id: number): void {
    this.reports = this.reports.filter((report) => report.id !== id);
  }
}
