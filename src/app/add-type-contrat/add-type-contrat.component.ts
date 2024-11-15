import { Component } from '@angular/core';
import { TypeContrat } from '../type-contrat';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-type-contrat',
  templateUrl: './add-type-contrat.component.html',
  styleUrls: ['./add-type-contrat.component.scss']
})
export class AddTypeContratComponent {

    type: TypeContrat = new TypeContrat();
  
    constructor(private userService: UserService, private router: Router){}
  
  submit(){
    this.createType();
    this.goToTypeList();
  }
    createType(){
        this.userService.addType(this.type).subscribe(data=>{
        console.log(data);
        },
        error => console.log(error));
    }
  
    goToTypeList(){
      this.router.navigate(['/list-type-contrat']);
    }
  }
  
