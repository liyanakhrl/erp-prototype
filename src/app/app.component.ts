import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('DashboardPage => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition('CalendarPage => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'WORQ ERP';
  isSidebarCollapsed = false;
  isMobileView = false;
  activeItem: string = '/dashboard'; // Default active item set to 'dashboard'
  currentDepartment = 'General'

  // Menu items with flyout (nested items)
  menuItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'fas fa-home',
      subMenu: [],
      isOpen: true,
    },
    {
      label: 'Customers',
      path: '/customers',
      icon: 'fas fa-users',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Orders',
      path: '/orders',
      icon: 'fas fa-box',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Analytics',
      path: '/analytics',
      icon: 'fa-solid fa-chart-simple',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Calendar',
      path: '/calendar',
      icon: 'fas fa-calendar-alt',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'Reports',
      path: '/reports',
      icon: 'fas fa-chart-line',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Knowledge Based',
      path: '/knowledge-based',
      icon: 'fas fa-book',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Gallery',
      path: '/gallery',
      icon: 'fa-solid fa-images',
      subMenu: [],
      isOpen: false,
    },
    {
      label: 'Recognition',
      path: '/general/wall',
      icon: 'fa fa-star',
      subMenu: [],
      isOpen: false,
    },
  ];

  departmentItems = [
    {
      label: 'General',
      path: '/general',
      icon: 'fas fa-home',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'Sales',
      path: '/general',
      icon: 'fa-solid fa-handshake',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'HR',
      path: '/general',
      icon: 'fa-solid fa-users',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'IT',
      path: '/general',
      icon: 'fa fa-laptop',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'Finance',
      path: '/general',
      icon: 'fas fa-wallet',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'Marketing',
      path: '/general',
      icon: 'fa-solid fa-bullseye',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
    {
      label: 'Profile',
      path: '/general',
      icon: 'fa-solid fa-user',
      subMenu: [
        {
          label: 'Weekly View',
          path: '/calendar/weekly',
          icon: 'fas fa-calendar-week',
        },
        {
          label: 'Monthly View',
          path: '/calendar/monthly',
          icon: 'fas fa-calendar-month',
        },
      ],
      isOpen: false,
    },
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

  prepareRoute(outlet: any) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
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
    this.isSidebarCollapsed = false; // Collapse sidebar by default in mobile view
  }

  // Method to handle flyout menu toggle for nested items
  toggleSubMenu(menuItem: any): void {
    if (menuItem.subMenu) {
      this.currentDepartment = menuItem.label;
      menuItem.isOpen = !menuItem.isOpen; // Toggle the visibility of sub-menu
    }
  }
}
