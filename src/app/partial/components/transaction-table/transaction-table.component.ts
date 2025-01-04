import { Component } from '@angular/core';
import { Transaction } from '../../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-table',
  standalone: false,
  
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.scss'
})
export class TransactionTableComponent {
  transactions: { [key: string]: Transaction[] } = {
    Today: [
      {
        date: 'Today',
        amount: '$7,600.00 USD',
        status: 'Paid',
        details: 'Reform',
        description: 'Website redesign',
        invoice: 'Invoice #00012',
      },
      {
        date: 'Today',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        details: 'Tom Cook',
        description: 'Salary',
        invoice: 'Invoice #00011',
      },
      {
        date: 'Today',
        amount: '$2,000.00 USD',
        status: 'Overdue',
        details: 'Tuple',
        description: 'Logo design',
        invoice: 'Invoice #00009',
      },
    ],
    Yesterday: [
      {
        date: 'Yesterday',
        amount: '$14,000.00 USD',
        status: 'Paid',
        details: 'SavvyCal',
        description: 'Website redesign',
        invoice: 'Invoice #00010',
      },
    ],
  };

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'text-green-700 bg-green-100';
      case 'withdraw':
        return 'text-gray-700 bg-gray-100';
      case 'overdue':
        return 'text-red-700 bg-red-100';
      default:
        return '';
    }
  }
}
