import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  employee: any
  http: HttpClient
  imgURL: any;
 constructor(public route: ActivatedRoute, public userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.employee=this.userAuthService.getUser();
  }
  updateEmployee(idCapgemini: number){
    this.router.navigate(['update-employee', idCapgemini]);
  }

}
