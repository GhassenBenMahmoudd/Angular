import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit{
employees: Employee[];
searchTerm: string;
user:Employee;
pages: number = 1;
constructor(public userService: UserService , private router: Router){}

ngOnInit(): void {
  this.getEmployees();
}
private getEmployees(){
  this.userService.getEmployeeList().subscribe(data => {
    this.employees = data;
  });
}

employeeDetails(idCapgemini: number){
  this.router.navigate(['employee-details', idCapgemini]);
}

updateEmployee(idCapgemini: number){
  this.router.navigate(['update-employee', idCapgemini]);
}

archiveEmployee(idCapgemini: number) {
  this.userService.archiveEmployee(idCapgemini)
    .subscribe(() => {
      console.log('Employé archivé avec succès.');
      this.employees = this.employees.filter((employe) => employe.idCapgemini !== idCapgemini)
    }, (error) => {
      console.error('Erreur lors de l\'archivage de l\'employé :', error);
    });
}

}