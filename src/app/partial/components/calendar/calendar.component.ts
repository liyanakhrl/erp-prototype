import { Component, OnInit } from '@angular/core';
import { EventData } from '../../../interfaces/event.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  views = ['Year', 'Month', 'Week', 'Day'];
  currentView = 'Year';
  currentDate: Date = new Date();

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
    return this.currentView === 'Year'
      ? this.currentDate.getFullYear().toString()
      : `${this.currentDate.toDateString()}`;
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

  getDaysInMonth(month: number): { date: number }[] {
    const date = new Date(this.currentDate.getFullYear(), month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({ date: date.getDate() });
      date.setDate(date.getDate() + 1);
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
}
