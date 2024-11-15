import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  display = 'none'
  verifyModalData = {}
  rememberMe: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService,private userAuthService: UserAuthService,private router: Router,private formBuilder: FormBuilder ) {}

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        emailCapgemini: ['', Validators.required ],
        userPassword: ['', Validators.required],
      });
    }

    Login() {
      if (this.registerForm.valid) {
        const login: Employee = {
          emailCapgemini: this.registerForm.value.emailCapgemini,
          userPassword: this.registerForm.value.userPassword
        };
      this.submitted = true;
      
      this.userService.login(login).subscribe(
        (response: any) => {
          this.userAuthService.setRoles(response.user.role);
          this.userAuthService.setToken(response.jwtToken);
          this.userAuthService.setUser(response.user);   
        this.router.navigate(['/dashborad']);
      },
        error => console.log(error));
  
    }
  
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.Login();
  }

  }