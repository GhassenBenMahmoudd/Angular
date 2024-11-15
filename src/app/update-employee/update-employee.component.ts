import { Component , OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { UserService } from '../_services/user.service';
import { Departement } from '../departement';
import { Contrat } from '../contrat';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
id: number;
employee: Employee = new Employee();
selectedDept: String;
departements: Departement[];
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDepartements();
    this.userService.getUserById(this.id)
    .subscribe(data => {
      this.employee = data;
      this.selectedDept = this.employee.departement?.nomDept;
    }, error => console.log(error));
  }
  private getDepartements() {
    this.userService.getAllDepartements().subscribe(data => {
      this.departements = data;
    });
  
  }
  updateEmployee(){
   const nouveauDepartement: Departement = this.departements.find(departement => departement.nomDept === this.selectedDept);

   this.employee.departement = nouveauDepartement;
   this.employee.departement = { nomDept: this.selectedDept };

    this.userService.updateEmployee(this.id, this.employee).subscribe(data =>{
      this.goToList();
    }
    , error => console.log(error)
    );
  }
  goToList(){
    this.router.navigate(['/list-employees'])
  }
  
}
