import { Component, Input } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
 employee: any
  constructor(public userService: UserService, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.employee=this.userAuthService.getUser();

  }
  changePass(idCapgemini:number){
    this.router.navigate(['reset-password', idCapgemini]);
  
  }
 
}
