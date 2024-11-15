import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})

export class AjouterFormationComponent {
  formation: Formation = new Formation();
  registerForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private router: Router,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      sujet: ['', Validators.required],
    });
  }
  saveFormation() {
    if (this.registerForm.valid) {
      const formation: Formation = {
        libelle: this.registerForm.value.libelle,
        sujet: this.registerForm.value.sujet,
        sessions: []
      };
    this.submitted = true;
    
    this.userService.ajouterFormation(formation).subscribe(data => {
      console.log(data);
      this.router.navigate(['/list-formation']);
    },
      error => console.log(error));

  }

}
onSubmit(){
  if (this.registerForm.invalid) {
    return;
  }
  this.saveFormation();
}


}