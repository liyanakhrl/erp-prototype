import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterable-table',
  standalone: false,

  templateUrl: './filterable-table.component.html',
  styleUrl: './filterable-table.component.scss',
})
export class FilterableTableComponent  implements OnInit {

  // Table data
  tableData = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Inactive' },
    { id: 3, name: 'Emily Johnson', email: 'emilyj@example.com', status: 'Active' },
    { id: 4, name: 'Michael Brown', email: 'michaelb@example.com', status: 'Inactive' }
  ];

  // Filters
  searchQuery: string = '';
  statusFilter: string = '';

  constructor() {}

  ngOnInit(): void {
    // Placeholder for initialization logic
  }

  /**
   * Filter data based on search query and status
   */
  filteredData() {
    return this.tableData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            item.email.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesStatus = this.statusFilter === '' || item.status === this.statusFilter;

      return matchesSearch && matchesStatus;
    });
  }

  /**
   * Export table data as CSV
   */
  exportData(): void {
    const data = this.filteredData().map(item => `${item.id},${item.name},${item.email},${item.status}`).join('\n');
    const csvContent = 'ID,Name,Email,Status\n' + data;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'filtered-table.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
