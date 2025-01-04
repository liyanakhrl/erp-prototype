import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
  activeItem: string = '/dashboard'; // Default active item set to 'dashboard'

  menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'fas fa-home' },
    { label: 'Customers', path: '/customers', icon: 'fas fa-users' },
    { label: 'Orders', path: '/orders', icon: 'fas fa-box' },
    { label: 'Calendar', path: '/calendar', icon: 'fas fa-calendar-alt' },
    { label: 'Reports', path: '/reports', icon: 'fas fa-chart-line' },
    { label: 'Knowledge Based', path: '/knowledge-based', icon: 'fas fa-book' },
    { label: 'Wall', path: '/general/wall', icon: 'fas fa-book' },
  ];
  constructor(private router: Router) {
    this.activeItem = this.router.url;

    // Subscribe to route changes to dynamically update the active item
    this.router.events.subscribe(() => {
      this.activeItem = this.router.url;
    });
    this.checkScreenSize(); // Check screen size on initialization
  }

  setActive(path: string) {
    this.activeItem = path;
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
    this.isSidebarCollapsed = false; // this.isMobileView; // Collapse sidebar by default in mobile view
  }
}
