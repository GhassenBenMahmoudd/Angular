import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Session } from '../session';
import { Employee } from '../employee';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss']
})
export class SessionDetailsComponent {
  id: number
  sessions : Session[]=[];
  employees : Employee[];
  session:Session;
  constructor(private route: ActivatedRoute, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.session = new Session();
    this.userService.getSessionById(this.id).subscribe( data => {
      this.session = data;
      this.employees=data.users;
    });
   
  }

}
