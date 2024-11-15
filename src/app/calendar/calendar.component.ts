import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import { UserService } from '../_services/user.service';
import { Event } from '../event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events:  Event[];
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin], // chargez le plug-in dayGrid
    initialView: 'dayGridMonth',
    events: [] as EventInput[]
  };
  constructor(public userService: UserService,private router: Router) { }
  ngOnInit() {
    this.userService.getEvents().subscribe(events => {
      this.events = events;
    this.calendarOptions.events = this.events.map(event => ({
      title: event.title,
      start: event.start,
      end: event.end
    })) as EventInput[];
  });
  }

  listEvent(){
    this.router.navigate(['list-event']);
  }

}