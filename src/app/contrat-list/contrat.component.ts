import { Component } from '@angular/core';
import { Contrat } from '../contrat';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent {
  contrats: Contrat[];
contrat:Contrat;
searchTerm: string;
  pages: number = 1;
  user:Employee;
  
 
  constructor(public userService: UserService , private router: Router){}
  
  ngOnInit(): void {
    this.getContrats();
  }
  private getContrats(){
    this.userService.getListContrats().subscribe(data => {
      this.contrats = data;
      
    });
  }
  
  
  annulerContrat(idContrat: number) {
    this.userService.deleteContrat(idContrat)
      .subscribe(() => {
        console.log('Contrat supprimer avec succées.');
        this.contrats = this.contrats.filter((contrat) => contrat.idContrat !== idContrat)
      }, (error) => {
        console.error('Erreur lors de la supprission de la contrat :', error);
      });
  }
  
  
}
