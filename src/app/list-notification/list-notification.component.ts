import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Notif } from '../notif';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.css']
})
export class ListNotificationComponent {
  notifications:Notif[];
  notification:Notif;
  pages: number = 1;

  constructor(public userService: UserService , private router: Router){}
  
  ngOnInit(): void {
    this.getNotifications();
  }
  private getNotifications() {
    this.userService.getNotificationList().subscribe(data => {
      this.notifications = data;
    });
  }
  annulerNotification(idNotif: number) {
    this.userService.suppNotification(idNotif)
      .subscribe(() => {
        console.log('Notification supprimer avec succées.');
        this.notifications = this.notifications.filter((notification) => notification.idNotification!== idNotif)
      }, (error) => {
        console.error('Erreur lors de la supprission de la notification :', error);
      });
  }
}
