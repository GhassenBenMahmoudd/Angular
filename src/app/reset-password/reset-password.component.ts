import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  id:number;
employee: Employee = new Employee();
error:string;
registerForm: FormGroup;
submitted = false;
  constructor(private userService: UserService, private route:ActivatedRoute,  private router: Router,private formBuilder: FormBuilder ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registerForm = this.formBuilder.group({
      userPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', [Validators.required]]
    });
    this.userService.getUserById(this.id)
    .subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
    
  }
  

  changePassword(){
    if (this.registerForm.valid) {
      const user: Employee = {
        userPassword: this.registerForm.value.userPassword,
        newPassword: this.registerForm.value.newPassword,
        confirmNewPassword: this.registerForm.value.confirmNewPassword};
    this.userService.changePassword(this.id, user).subscribe(data =>{
      console.log('Mot de passe changé avec succée');
      this.router.navigate(['/dashborad']);

      },
         error => {
      this.error = error;
    }
    );
  }
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.changePassword();
    
  }
}
