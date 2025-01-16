import { Component, OnInit } from '@angular/core';
import { EventData } from '../../../interfaces/event.interface';
import { ReactiveFormsModule } from '@angular/forms';
import { DayName } from '../../../interfaces/day.interface';

@Component({
  selector: 'app-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    console.log("monthDays", this.monthDays)
  }
  views = ['Year', 'Month', 'Week', 'Day'];
  currentView = 'Year';
  currentDate: Date = new Date();

  dayNames: DayName[] = [
    { name: 'Sunday', shortName: 'Sun' },
    { name: 'Monday', shortName: 'Mon' },
    { name: 'Tuesday', shortName: 'Tue' },
    { name: 'Wednesday', shortName: 'Wed' },
    { name: 'Thursday', shortName: 'Thu' },
    { name: 'Friday', shortName: 'Fri' },
    { name: 'Saturday', shortName: 'Sat' },
  ];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  dayHours = Array.from({ length: 24 }, (_, i) => i);
  monthDays = this.getDaysInMonth(this.currentDate.getMonth());
  weekDays = this.getWeekDays(this.getWeekStart(this.currentDate));
  events = [
    { date: new Date(new Date().setHours(6)), title: 'Breakfast', duration: 1 },
    {
      date: new Date(new Date().setHours(7, 30)),
      title: 'Flight to Paris',
      duration: 2,
    },
  ];

  get currentViewLabel(): string {
    const startWeek = new Date(this.currentDate); // Copy current date
    startWeek.setDate(startWeek.getDate() - 7); // Subtract 7 days

    const endWeek = new Date(this.currentDate); // Keep the current date

    // Format date as 'ddd dd MMMM yyyy'
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-GB', {
        weekday: 'short', // ddd - Short day name
        day: '2-digit', // dd - Day number
        month: 'long', // MMMM - Full month name
        year: 'numeric', // yyyy - Full year
      });
    };

    const startWeekStr = formatDate(startWeek);
    const endWeekStr = formatDate(endWeek);

    return this.currentView === 'Year'
      ? this.currentDate.getFullYear().toString()
      : this.currentView === 'Week'
        ? `${startWeekStr} - ${endWeekStr}`
        : `${this.currentDate.toDateString()}`;
  }

  reformatDate(date: any) {
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-GB', {
        weekday: 'short', // ddd - Short day name
        day: '2-digit', // dd - Day number
        month: 'long', // MMMM - Full month name
        year: 'numeric', // yyyy - Full year
      });
    };

    return formatDate(new Date(date));
  }

  setView(view: string) {
    this.currentView = view;
  }

  navigate(step: number) {
    if (this.currentView === 'Year') {
      this.currentDate.setFullYear(this.currentDate.getFullYear() + step);
    } else if (this.currentView === 'Month') {
      this.currentDate.setMonth(this.currentDate.getMonth() + step);
    } else if (this.currentView === 'Week') {
      this.currentDate.setDate(this.currentDate.getDate() + step * 7);
    } else {
      this.currentDate.setDate(this.currentDate.getDate() + step);
    }
    this.updateView();
  }

  updateView() {
    this.weekDays = this.getWeekDays(this.getWeekStart(this.currentDate));
    this.monthDays = this.getDaysInMonth(this.currentDate.getMonth());
  }

  getDaysInMonth(month: number): { date: number; month: number; day: Date; weekday: number, monthState: string }[] {
    const year = this.currentDate.getFullYear();
    const date = new Date(year, month, 1);
    const days = [];

    // Get the starting weekday for the month (0 = Sunday, 6 = Saturday)
    const startWeekday = date.getDay();

    // Get the last date of the previous month
    const prevMonthDate = new Date(year, month, 0); // This will give us the last day of the previous month
    const prevMonthDays = prevMonthDate.getDate();

    // Add previous month's last few days to fill the start of the grid
    const prevMonthStartDay = prevMonthDays - startWeekday + 1;
    for (let i = prevMonthStartDay; i <= prevMonthDays; i++) {
      days.push({
        date: i,
        month: (month === 0 ? 11 : month - 1),  // If it's January, we get December of the previous year
        day: new Date(year, month - 1, i),  // Use the previous month
        weekday: (prevMonthDate.getDay() + 1) % 7, // Wrap the weekday correctly,
        monthState: 'previous'
      });
    }

    // Loop through all days of the current month
    while (date.getMonth() === month) {
      days.push({
        date: date.getDate(),
        month: month,
        day: new Date(date),
        weekday: date.getDay(),
        monthState: 'current'
      });
      date.setDate(date.getDate() + 1);
    }

    // Get the number of days in the next month to fill the grid
    const nextMonthStartDate = new Date(year, month + 1, 1); // First day of next month
    const nextMonthDays = 6 - date.getDay(); // Number of days to fill from next month to complete the grid

    // Add next month's first few days (to fill the last row)
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: i,
        month: (month + 1) % 12,  // If it's December, we go to January of next year
        day: new Date(year, month + 1, i),
        weekday: (date.getDay() + i) % 7, // Wrap the weekday correctly
        monthState: 'next'
      });
    }

    return days;
  }





  getWeekStart(date: Date): Date {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    return start;
  }

  getWeekEnd(date: Date): Date {
    const end = new Date(date);
    end.setDate(end.getDate() + (6 - end.getDay()));
    return end;
  }

  getWeekDays(start: Date): { date: Date }[] {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      return { date: new Date(day) };
    });
  }

  getEventsForDayAndHour(date: Date, hour: number) {
    return this.events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.toDateString() === date.toDateString() &&
        eventDate.getHours() === hour
      );
    });
  }

  getEventsForDay(day: number) {
    return this.events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day;
    });
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  }

  isMonthToday(day: Date): boolean {
    const today = new Date(); // Get today's date

    // Compare the given Date object with today's date
    return (
      day.getDate() === today.getDate() && // Day matches
      day.getMonth() === today.getMonth() && // Month matches
      day.getFullYear() === today.getFullYear() // Year matches
    );
  }

  isTodayYear(day: number, month: number): boolean {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth(); // 0-indexed (Jan = 0)
    const todayDate = today.getDate();

    // Replace 'currentYear' with your actual year or dynamically pass it
    const currentYear = new Date().getFullYear();

    return (
      todayYear === currentYear && todayMonth === month && todayDate === day
    );
  }
}
