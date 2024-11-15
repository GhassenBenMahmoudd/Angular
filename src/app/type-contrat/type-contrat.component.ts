import { Component } from '@angular/core';
import { TypeContrat } from '../type-contrat';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-contrat',
  templateUrl: './type-contrat.component.html',
  styleUrls: ['./type-contrat.component.scss']
})
export class TypeContratComponent {
  types: TypeContrat[];
  type:TypeContrat;
    searchTerm: string;
    pages: number = 1;
    constructor(public userService: UserService , private router: Router){}
    
    ngOnInit(): void {
      this.getTypes();
    }
    private getTypes(){
      this.userService.getListTypes().subscribe(data => {
        this.types = data;
        
      });
    }
    
    annulerType(nomTypeContrat: string) {
      this.userService.deleteType(nomTypeContrat)
        .subscribe(() => {
          console.log('type de contrat supprimer avec succées.');
          this.types = this.types.filter((typeContrat) => typeContrat.nomTypeContrat !== nomTypeContrat)
        }, (error) => {
          console.error('Erreur lors de la supprission de la type de contrat :', error);
        });
    }
  
  }
  