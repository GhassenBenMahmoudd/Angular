import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  id: number;
  employee: Employee = new Employee();
  error: string;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      emailPerso: ['', [Validators.required, Validators.email]],
    });
  }

  resetPassword() {
    if (this.registerForm.valid) {
      const user: Employee = {
        emailPerso: this.registerForm.value.emailPerso,
      };
      this.userService.forgotPassword(user).subscribe(
        () => {
          console.log('Mot de passe récupérer avec succès');
          this.router.navigate(['']);
        },
        (error) => {
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
    this.resetPassword();
  }
}