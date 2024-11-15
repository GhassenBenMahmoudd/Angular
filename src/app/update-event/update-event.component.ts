import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit{
  id: number;
  event: Event = new Event();
    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.userService.getEventById(this.id)
      .subscribe(data => {
        this.event = data;
      }, error => console.log(error));
    }
  
    updateEvent(){
      this.userService.updateEvent(this.id, this.event).subscribe(data =>{
        this.goToList();
      },
       error => console.log(error));
    }
    goToList(){
      this.router.navigate(['/list-event'])
    }
  
}


