import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { PartialModule } from '../../../partial/partial.module';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    PartialModule
  ]
})
export class CalendarModule { }
