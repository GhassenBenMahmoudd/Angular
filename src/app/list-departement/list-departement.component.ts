import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Departement } from '../departement';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent {
  departements: Departement[];
departement:Departement;
  searchTerm: string;
  pages: number = 1;
  constructor(public userService: UserService , private router: Router){}
  
  ngOnInit(): void {
    this.getDepartements();
  }
  private getDepartements(){
    this.userService.getAllDepartements().subscribe(data => {
      this.departements = data;
      
    });
  }
  
  annulerDepartement(nomDept: string) {
    this.userService.deleteDepatement(nomDept)
      .subscribe(() => {
        console.log('departement supprimer avec succées.');
        this.departements = this.departements.filter((departement) => departement.nomDept !== nomDept)
      }, (error) => {
        console.error('Erreur lors de la supprission de la departement :', error);
      });
  }

}
