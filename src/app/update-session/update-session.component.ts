import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Employee } from '../employee';
import { Session } from '../session';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.scss']
})
export class UpdateSessionComponent implements OnInit{
  id: number;
  session:Session=new Session();
  selectedEmployees: Employee[]=[];
  employees : Employee[];
    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.getEmployees();
      this.userService.getSessionById(this.id)
      .subscribe(data => {
        this.session = data;
      }, error => console.log(error));
    }
    
    private getEmployees(){
      this.userService.getEmployeeList().subscribe(data => {
        this.employees = data;
      });
    }
  
    updateSession(){
      this.session.users=this.session.users.concat(this.selectedEmployees);
      this.userService.updateSession(this.id, this.session).subscribe(data =>{
        this.goToList();
      },
       error => console.log(error));
       
       for (let index = 0; index < this.selectedEmployees.length; index++) {
        this.userService.sendEvalchaud(this.selectedEmployees[index].emailPerso).subscribe(data =>{
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
      }
      this.selectedEmployees=[];
      
    }
    goToList(){
      this.router.navigate(['/list-formation'])
    }

}
