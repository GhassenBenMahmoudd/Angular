import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { Notif } from '../notif';
import { HttpClient } from '@angular/common/http';
import { Message } from '../message';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  employee: any
  notifications: Notif[];
  messages:Message[];
  notificationCount: number = 0;
  messageCount: number=0;
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.employee = this.userAuthService.getUser();
    this.getNotificationList();
    this.getAlertes();
    this.getUnreadCount();
    this.getUnreadCountMessage();
  }
 

  
  private getNotificationList(){
    this.userService.getNotificationList().subscribe(data => {
      this.notifications = data;
    });
  }

  private getUnreadCount(){
    this.userService.getUnreadCount().subscribe(count => {
      this.notificationCount = count;
    });
    }
  markAsRead(notificationId: number) {
    this.userService.markNotificationAsRead(notificationId).subscribe(data => {
      this.getUnreadCount();
    });
  }

  private getAlertes() {
    this.userService.getMessage(this.employee.idCapgemini).subscribe(data => {
      this.messages = data;
    });
  }
  private getUnreadCountMessage(){
    this.userService.getUnreadCountMessage(this.employee.idCapgemini).subscribe(count => {
      this.messageCount = count;
    });
    }
    markMessageAsRead(messageId: number) {
      this.userService.markMessageAsRead(messageId).subscribe(data => {
        this.getUnreadCountMessage();
      });
    }
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['']);
  }

}
