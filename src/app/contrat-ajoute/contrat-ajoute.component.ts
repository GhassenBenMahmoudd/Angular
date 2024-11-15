import { Component } from '@angular/core';
import { TypeContrat } from '../type-contrat';
import { Employee } from '../employee';
import { Contrat } from '../contrat';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contrat-ajoute',
  templateUrl: './contrat-ajoute.component.html',
  styleUrls: ['./contrat-ajoute.component.scss']
})
export class ContratAjouteComponent {
  employeeSelected: Employee ;
  employees: Employee[];
  contrat: Contrat = new Contrat();
  typeContratSelected: TypeContrat ;
  typeContrats: TypeContrat[];
  constructor(private userService: UserService,
    private router: Router){}

    ngOnInit() {
      this.getEmployee();
      this.getTypeContrat();
    }

submit(){
  this.createContrat();
  this.goToContratList();
}
createContrat(){
    this.contrat.user=this.employeeSelected;
    this.contrat.typeContrat=this.typeContratSelected;
    this.userService.addContrat(this.contrat).subscribe(data=>{
      console.log(data);
      },
      error => console.log(error));
  }

  goToContratList(){
    this.router.navigate(['liste-contrat']);
  }
  private getTypeContrat() {
    this.userService.getListTypes().subscribe(data => {
      this.typeContrats = data;
    });
  }
  private getEmployee() {
    this.userService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
}
