import { Component } from '@angular/core';
import { Departement } from '../departement';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.scss']
})
export class AddDepartementComponent {

  departement: Departement = new Departement();

  constructor(private userService: UserService, private router: Router){}

submit(){
  this.createDepartement();
  this.goToDeptList();
}
  createDepartement(){
      this.userService.addDepartement(this.departement).subscribe(data=>{
      console.log(data);
      },
      error => console.log(error));
  }

  goToDeptList(){
    this.router.navigate(['/list-departement']);
  }
}
