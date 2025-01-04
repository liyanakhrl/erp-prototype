import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: false,

  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  breadcrumbs: { label: string; link: string }[] = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Subcategory', link: '/category/subcategory' },
    { label: 'Current Page', link: '' }, // The current page, with no link
  ];
}
