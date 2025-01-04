import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  standalone: false,

  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent {
  constructor(private router: Router) {}

  // Navigate to the specified URL
  navigateTo(url: string): void {
    this.router.navigateByUrl(url); // Angular routing navigation
  }
}
