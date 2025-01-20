import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr',
  standalone: false,

  templateUrl: './hr.component.html',
  styleUrl: './hr.component.scss'
})
export class HrComponent implements OnInit {
  // Declare a variable to hold the routes
  public routes: any[] = [
    { path: '' },
    { path: 'compensation' },
    { path: 'general' }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.routes);  // Logs only HR module routes
  }

}
