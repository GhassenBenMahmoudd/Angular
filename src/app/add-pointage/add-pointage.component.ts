import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Pointage } from '../pointage';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-pointage',
  templateUrl: './add-pointage.component.html',
  styleUrls: ['./add-pointage.component.css']
})
export class AddPointageComponent {
  employeeSelected: Employee ;
  employees: Employee[];
  pointage: Pointage = new Pointage();

  constructor(private userService: UserService,
    private router: Router){}

    ngOnInit() {
      this.getEmployee();
    }

submit(){
  this.createPointage();
}
  createPointage(){
    this.pointage.user=this.employeeSelected;
    this.userService.createPointage(this.pointage).subscribe(data=>{
      console.log(data);
      },
      error => console.log(error));
      this.router.navigate(['/pointage']);
  }

  private getEmployee() {
    this.userService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
}
