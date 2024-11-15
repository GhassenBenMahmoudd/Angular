import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-list-user-manager',
  templateUrl: './list-user-manager.component.html',
  styleUrls: ['./list-user-manager.component.scss']
})
export class ListUserManagerComponent {
  employees: Employee[];
  employee: any;
  pages: number = 1;
  searchTerm: string;

 constructor(public route: ActivatedRoute, public userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.employee=this.userAuthService.getUser();
    this.getEmployees();
  }
  
  private getEmployees(){
    this.userService.getUserListManager(this.employee.idCapgemini).subscribe(data => {
      this.employees = data;
    });
  }  
}
