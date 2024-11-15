import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Event } from '../event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  events: Event[];
  event:Event;
  searchTerm: string;
  pages: number = 1;
  constructor(public userService: UserService , private router: Router){}
  
  ngOnInit(): void {
    this.getListEvents();
  }
  private getListEvents(){
    this.userService.getEvents().subscribe(data => {
      this.events = data;
      
    });
  }

  eventDetails(idEvent: number){
    this.router.navigate(['event-details', idEvent]);
  }
  
  updateEvent(idEvent: number){
    this.router.navigate(['update-event', idEvent]);
  }
  
  annulerEvent(idEvent: number) {
    this.userService.deleteEvent(idEvent)
      .subscribe(() => {
        console.log('Evénement supprimer avec succées.');
        this.events = this.events.filter((event) => event.idEvent !== idEvent)
      }, (error) => {
        console.error("Erreur lors de la supprission de l'événement :", error);
      });
  }
  
}
