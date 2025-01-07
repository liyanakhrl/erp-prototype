import { Component } from '@angular/core';

@Component({
  selector: 'app-header-top',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  // Method to toggle the mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
