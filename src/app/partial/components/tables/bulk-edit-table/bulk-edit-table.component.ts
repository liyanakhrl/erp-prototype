import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-edit-table',
  standalone: false,

  templateUrl: './bulk-edit-table.component.html',
  styleUrl: './bulk-edit-table.component.scss',
})
export class BulkEditTableComponent  implements OnInit {

  // Rows data
  rows = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Active', selected: false },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Inactive', selected: false },
    { id: 3, name: 'Emily Johnson', email: 'emilyj@example.com', status: 'Active', selected: false },
    { id: 4, name: 'Michael Brown', email: 'michaelb@example.com', status: 'Inactive', selected: false }
  ];

  // Count of selected rows
  selectedCount = 0;

  ngOnInit(): void {
    this.updateSelectedCount();
  }

  /**
   * Toggle selection for all rows based on "Select All" checkbox
   * @param event - Checkbox change event
   */
  toggleAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.rows = this.rows.map(row => ({ ...row, selected: isChecked }));
    this.updateSelectedCount();
  }

  /**
   * Update the selected row count when individual row selection changes
   */
  toggleRowSelection(): void {
    this.updateSelectedCount();
  }

  /**
   * Update the count of selected rows
   */
  updateSelectedCount(): void {
    this.selectedCount = this.rows.filter(row => row.selected).length;
  }

  /**
   * Bulk update the status of all selected rows
   * @param newStatus - The status to apply to selected rows
   */
  bulkUpdateStatus(newStatus: string): void {
    this.rows.forEach(row => {
      if (row.selected) {
        row.status = newStatus;
      }
    });
    this.updateSelectedCount();
  }
}