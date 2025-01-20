import { Component } from '@angular/core';

@Component({
  selector: 'app-table-multi-line-content',
  standalone: false,

  templateUrl: './table-multi-line-content.component.html',
  styleUrl: './table-multi-line-content.component.scss',
})
export class TableMultiLineContentComponent {
  people = [
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      name: 'John Doe',
      role: 'Web Developer',
      description: 'Specializes in frontend frameworks like Angular and React.',
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      name: 'Jane Smith',
      role: 'UX Designer',
      description: 'Focuses on creating intuitive and accessible designs.',
    },
    {
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      name: 'Michael Lee',
      role: 'Backend Engineer',
      description: 'Experienced with databases and server-side frameworks.',
    },
  ];
}
