import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit{
  id: number;
  formation: Formation = new Formation();
    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  
    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.userService.getFormationById(this.id)
      .subscribe(data => {
        this.formation = data;
      }, error => console.log(error));
    }
  
    updateFormation(){
      this.userService.updateFormation(this.id, this.formation).subscribe(data =>{
        this.goToList();
      },
       error => console.log(error));
    }
    goToList(){
      this.router.navigate(['/list-formation'])
    }
  
}
