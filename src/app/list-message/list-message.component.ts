import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Message } from '../message';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss']
})
export class ListMessageComponent {
  employee: any
  messages:Message[];
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.employee = this.userAuthService.getUser();
    this.getNotificationList();
  }
 

  
  private getNotificationList(){
    this.userService.getMessage(this.employee.idCapgemini).subscribe(data => {
      this.messages = data;
    });
  }
  annulerMessage(id: number) {
    this.userService.suppMessage(id)
      .subscribe(() => {
        console.log('Notification supprimer avec succées.');
        this.messages = this.messages.filter((message) => message.idMessage!== id)
      }, (error) => {
        console.error('Erreur lors de la supprission de la notification :', error);
      });
  }
  
}
