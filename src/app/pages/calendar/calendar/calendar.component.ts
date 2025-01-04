import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  currentMonth: Date = new Date(2024, 11, 1);
  calendarDays: any[] = [];
  events = [
    {
      start: '2024-12-05',
      end: '2024-12-07',
      title: 'Finance Meeting',
      time: '10:00 AM',
      description: 'Discuss project milestones.',
    },
    {
      start: '2024-12-05',
      end: '2024-12-07',
      title: 'Team Meeting',
      time: '10:00 AM',
      description: 'Discuss project milestones.',
    },
    {
      start: '2024-12-02',
      end: '2024-12-03',
      title: 'Marketing Meeting',
      time: '10:00 AM',
      description: 'Discuss project milestones.',
    },
    {
      start: '2024-12-25',
      end: '2024-12-25',
      title: 'Christmas Party',
      time: '7:00 PM',
      description: 'Celebrate Christmas with friends.',
    },
  ];

  ngOnInit(): void {
    this.loadCalendar();
  }

  loadCalendar(): void {
    const daysInMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayIndex = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    ).getDay();
    const lastMonthDays = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      0
    ).getDate();

    this.calendarDays = [];

    // Previous month's days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      this.calendarDays.push({
        date: lastMonthDays - i,
        isPrevMonth: true,
        events: [],
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = this.events.filter((event) => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        const current = new Date(
          this.currentMonth.getFullYear(),
          this.currentMonth.getMonth(),
          day
        );
        return current >= start && current <= end;
      });
      this.calendarDays.push({
        date: day,
        isPrevMonth: false,
        isNextMonth: false,
        events: dayEvents,
      });
    }

    // Next month's days
    const remainingDays = 35 - this.calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      this.calendarDays.push({
        date: i,
        isNextMonth: true,
        events: [],
      });
    }
  }

  changeMonth(offset: number): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + offset);
    this.loadCalendar();
  }

  showEventDetails(event: any): void {
    alert(
      `Event: ${event.title}\nTime: ${event.time}\nDescription: ${event.description}`
    );
  }

  closeEventDetails(): void {
    alert('Closing event details');
  }
}
