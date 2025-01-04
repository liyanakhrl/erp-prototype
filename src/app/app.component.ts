import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WORQ ERP'; 
  isSidebarCollapsed = false;
  isMobileView = false;

  constructor() {
    this.checkScreenSize(); // Check screen size on initialization
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  private checkScreenSize(): void {
    // Detects if screen width is less than 768px (mobile view)
    this.isMobileView = window.innerWidth < 768;
    this.isSidebarCollapsed = false;// this.isMobileView; // Collapse sidebar by default in mobile view
  }
}
