import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pointage } from '../pointage';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent {
  pointages: Pointage[];
  id:number;
  searchTerm: string;
  pointage: Pointage;
  pages: number = 1;
  constructor(private userService:UserService,private route: ActivatedRoute) {
  }

 ngOnInit(): void {
   this.getPointages();
   
 }
 

 private getPointages(){
   this.userService.getPointageList().subscribe(data =>{
     this.pointages = data;
     console.log(data);
   });
 }
 deletePointage(idPointage: number) {
  this.userService.deletePointage(idPointage)
    .subscribe(() => {
      console.log('Formation supprimer avec succées.');
      this.pointages = this.pointages.filter((pointage) => pointage.idPointage !== idPointage)
    }, (error) => {
      console.error('Erreur lors de la supprission de la formation :', error);
    });
}

}
