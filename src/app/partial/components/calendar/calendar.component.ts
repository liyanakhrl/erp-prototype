import { Component, OnInit } from '@angular/core';
import { EventData } from '../../../interfaces/event.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  currentView: string = 'month'; // default view
  monthYear: string = '';
  calendarDays: any[] = [];
  events: any[] = []; // Example events, should be populated dynamically
  
  upcomingEvents: any[] = []; // Example upcoming events
  pastEvents: any[] = []; // Example past events
  currentEvents: any[] = []; // Example current events

  ngOnInit(): void {
    this.renderCalendar();
  }

  // Function to render the calendar with the correct days
  renderCalendar(): void {
    const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    this.monthYear = `${this.getMonthName(this.currentDate.getMonth())} ${this.currentDate.getFullYear()}`;
    
    this.calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      this.calendarDays.push({ date: new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day), title: `Event ${day}`, time: '10:00 AM' });
    }

    const totalCells = startDay + daysInMonth;
    const emptyCells = 7 - (totalCells % 7);
    if (emptyCells !== 7) {
      for (let i = 0; i < emptyCells; i++) {
        this.calendarDays.push(null);
      }
    }
  }

  // Function to go to today
  goToToday(): void {
    this.currentDate = new Date();
    this.renderCalendar();
  }

  // Helper function to get month name
  getMonthName(monthIndex: number): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
  }

  // Check if a day is the current day
  isCurrentDay(day: any): boolean {
    const today = new Date();
    return day && day.date.getDate() === today.getDate() && day.date.getMonth() === today.getMonth() && day.date.getFullYear() === today.getFullYear();
  }

  // Check if a day is upcoming
  isUpcomingDay(day: any): boolean {
    const today = new Date();
    return day && day.date.getTime() > today.getTime();
  }

  // Function to change view
  changeView(view: string): void {
    this.currentView = view;
    this.renderCalendar();
  }

  // Function to add an event
  addEvent(): void {
    // Your logic to add event
    alert('Add event functionality coming soon!');
  }
}