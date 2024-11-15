import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent {
  employee: any
  constructor(public userService: UserService, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.employee=this.userAuthService.getUser();

  }
  sendMessage(){
    this.router.navigate(['send-alerte']);
  }
  changePass(idCapgemini:number){
    this.router.navigate(['reset-password', idCapgemini]);
  }
  listContrat(){
    this.router.navigate(['liste-contrat']);
  
  }
  listDept(){
    this.router.navigate(['list-departement']);
  
  }
  listType(){
    this.router.navigate(['list-type-contrat']);
  
  }
}
