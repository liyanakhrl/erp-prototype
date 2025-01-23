import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: `./tab.component.html`,
  styleUrl: './tab.component.scss',
})
export class TabComponent implements OnInit {
  activeTab: number = 1;
  content: any = '';

  tabNames = [
    { index: 1, name: 'Duit raya', description: 'Selamat Hari Raya' },
    { index: 2, name: 'Secret santa', description: 'Merry Christmas' },
    { index: 3, name: 'Ang pao', description: 'Gong Xi Fa Cai' }
  ];

  ngOnInit(): void {
    this.setActiveTab(this.activeTab)
  }

  // Method to change the active tab
  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
    this.content = this.tabNames.find(i => i.index === tabNumber)?.description
  }
}
