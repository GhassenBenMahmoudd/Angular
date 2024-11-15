import { Component } from '@angular/core';
import { Session } from '../session';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { Formation } from '../formation';


@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {
  id:number;
  formation: Formation;
  session: Session = new Session();
  selectedEmployees: Employee[]=[];
  employees : Employee[];
  
  constructor(private userService: UserService,
    private router: Router, private route: ActivatedRoute,){}
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];

    this.userService.getFormationById(this.id)
    .subscribe(data => {
      this.formation = data;
    }, error => console.log(error));
    this.getEmployees();

    }
    private getEmployees(){
      this.userService.getEmployeeList().subscribe(data => {
        this.employees = data;
      });
    }
    saveSession(){
      this.session.users=this.selectedEmployees;
      
      this.userService.ajouterSession(this.id,this.session).subscribe(data=>{
        console.log(data);
        this.formationDetails(this.id);
        },
        error => console.log(error));
        for (let index = 0; index < this.selectedEmployees.length; index++) {
          this.userService.sendEvalchaud(this.selectedEmployees[index].emailCapgemini).subscribe(data =>{
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
        this.userService.sendEvalfroid(this.selectedEmployees[index].emailCapgemini).subscribe(data =>{
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
        }
        this.selectedEmployees=[];
        
    }
    
    formationDetails(idFormation: number){
      this.router.navigate(['formation-details', idFormation]);
    }

}
