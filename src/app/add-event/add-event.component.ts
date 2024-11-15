import { Component } from '@angular/core';
import { Event } from '../event';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {

  event: Event = new Event();
  constructor(private userService: UserService, private router: Router){}

    ngOnInit() {
    }
   
    
  addEvent(){
    this.userService.addEvent(this.event).subscribe(data=>{
      console.log(data);
      this.goToCalendar();
      },
      error => console.log(error));
  }

  goToCalendar(){
    this.router.navigate(['/calendar']);
  }
  


}
