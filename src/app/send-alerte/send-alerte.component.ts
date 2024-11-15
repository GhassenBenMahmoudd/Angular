import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Message } from '../message';

@Component({
  selector: 'app-send-alerte',
  templateUrl: './send-alerte.component.html',
  styleUrls: ['./send-alerte.component.scss']
})
export class SendAlerteComponent {
  employeeSelected: Employee ;
  employees: Employee[];
  message: Message = new Message();

  constructor(private userService: UserService, private router: Router){}

  ngOnInit() {
    this.getEmployee();
  }
submit(){
  this.sendAlerte();
  this.goToDashboard();
}
  sendAlerte(){
    this.message.user=this.employeeSelected;
    this.message.msg=this.message.msg;
    this.userService.sendMessage(this.message).subscribe(data=>{
      console.log(data);
      },
      error => console.log(error));
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
  private getEmployee() {
    this.userService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

}
