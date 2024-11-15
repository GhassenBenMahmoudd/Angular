import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../formation';
import { UserService } from '../_services/user.service';
import { Session } from '../session';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent {
  formations: Formation[];
  sessions: Session[];
formation:Formation;
  searchTerm: string;
  pages: number = 1;
  constructor(public userService: UserService , private router: Router){}
  
  ngOnInit(): void {
    this.getFormations();
  }
  private getFormations(){
    this.userService.getFormationList().subscribe(data => {
      this.formations = data;
      
    });
  }

  
  
  formationDetails(idFormation: number){
    this.router.navigate(['formation-details', idFormation]);
  }
  
  updateFormation(idFormation: number){
    this.router.navigate(['update-formation', idFormation]);
  }
  
  annulerFormation(idFormation: number) {
    this.userService.suppFormation(idFormation)
      .subscribe(() => {
        console.log('Formation supprimer avec succées.');
        this.formations = this.formations.filter((formation) => formation.idFormation !== idFormation)
      }, (error) => {
        console.error('Erreur lors de la supprission de la formation :', error);
      });
  }
  
  
}
