import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Role } from '../role';
import { UserService } from '../_services/user.service';
import { Manager } from '../manager';
import { Departement } from '../departement';
import { Contrat } from '../contrat';
import { TypeContrat } from '../type-contrat';

@Component({
  selector: 'app-registre-employee',
  templateUrl: './registre-employee.component.html',
  styleUrls: ['./registre-employee.component.css']
})

export class RegistreEmployeeComponent {
  employee: Employee = new Employee();
  contrat: Contrat=new Contrat();
  roles: Role[] = [];
  registerForm: FormGroup;
  submitted = false;
  managers: Manager[];
  departements: Departement[];
  typeContrats: TypeContrat[];

    constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getRoles();
    this.getMAnagers();
    this.getDepartements();
    this.getTypeContrat();
    this.registerForm = this.formBuilder.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      emailCapgemini: ['', [Validators.required, Validators.email]],
      idCapgemini: [null, Validators.required],
      idPayroll: [null, Validators.required],
      emailPerso: ['', [Validators.required, Validators.email]],
      cin: ['', Validators.required],
      dept: [''],
      role: [[], Validators.required],
      passportExpired: [''],
      visaExpired: [''],
      profil: [''],
      expAnt: [null],
      ancienneteATC: [null],
      nbEnfant: [null],
      situationFamiliale: ['', Validators.required],
      genre: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      diplome: [''],
      promotion: [''],
      ecole: [''],
      telPerso: [null],
      telPro: [null, Validators.required],
      titreAdmin: [''],
      jobName: [''],
      roleFamily: [''],
      professionalCommunity: [''],
      classement: [''],
      l1: [''],
      skills: [''],
      l2: [''],
      ncr: [''],
      manager: [null],
      departement: ['',Validators.required],
      typeContrat: [''],
      startDate: [''],
      endDate: [''],
      salaire: [null],
      
      
    });
  }

  private getRoles() {
    this.userService.listRole().subscribe(data => {
      this.roles = data;
    });
  }
  private getMAnagers() {
    this.userService.getAllManager().subscribe(data => {
      this.managers = data;
    });
  }
  private getDepartements() {
    this.userService.getAllDepartements().subscribe(data => {
      this.departements = data;
    });
  }
  private getTypeContrat() {
    this.userService.getListTypes().subscribe(data => {
      this.typeContrats = data;
    });
  }
  affecter(){
    const classementValue = this.registerForm.value.classement;

    if (classementValue === 'fff') {
      this.registerForm.get('skills').setValue('Valeur pour fff');
      this.registerForm.get('l1').setValue('Valeur pour fff');
      this.registerForm.get('l2').setValue('Valeur pour fff');
      this.registerForm.get('ncr').setValue('Valeur pour fff');
    } else if (classementValue === 'aa') {
      this.registerForm.get('skills').setValue('Valeur pour aa');
      this.registerForm.get('l1').setValue('Valeur pour aa');
      this.registerForm.get('l2').setValue('Valeur pour aa');
      this.registerForm.get('ncr').setValue('Valeur pour aa');
    }
  }
  
  saveEmployee() {
    if (this.registerForm.valid) {
      const user: any = {
        idCapgemini: this.registerForm.value.idCapgemini,
        userFirstName: this.registerForm.value.userFirstName,
        userLastName: this.registerForm.value.userLastName,
        emailCapgemini: this.registerForm.value.emailCapgemini,
        emailPerso: this.registerForm.value.emailPerso,
        dept: this.registerForm.value.dept,
        cin: this.registerForm.value.cin,
        idPayroll: this.registerForm.value.idPayroll,
        role: this.registerForm.value.role,
        passportExpired: this.registerForm.value.passportExpired,
        visaExpired: this.registerForm.value.visaExpired,
        profil: this.registerForm.value.profil,
        expAnt: this.registerForm.value.expAnt,
        ancienneteATC: this.registerForm.value.ancienneteATC,
        nbEnfant: this.registerForm.value.nbEnfant,
        situationFamiliale: this.registerForm.value.situationFamiliale,
        genre: this.registerForm.value.genre,
        dateNaissance: this.registerForm.value.dateNaissance,
        diplome: this.registerForm.value.diplome,
        promotion: this.registerForm.value.promotion,
        ecole: this.registerForm.value.ecole,
        telPerso: this.registerForm.value.telPerso,
        telPro: this.registerForm.value.telPro,
        titreAdmin: this.registerForm.value.titreAdmin,
        jobName: this.registerForm.value.jobName,
        roleFamily: this.registerForm.value.roleFamily,
        classement: this.registerForm.value.classement,
        skills: this.registerForm.value.skills,
        l1: this.registerForm.value.l1,    
        l2: this.registerForm.value.l2,    
        ncr: this.registerForm.value.ncr,    
        professionalCommunity: this.registerForm.value.professionalCommunity,
        departement: this.registerForm.value.departement,
        manager: this.registerForm.value.manager,

      };
      const contrat: any = {
        typeContrat: this.registerForm.value.typeContrat,
        startDate: this.registerForm.value.startDate,
        endDate: this.registerForm.value.endDate,
        salaire: this.registerForm.value.salaire,
        user:user
      };
      const departementId = this.registerForm.value.departement;
      const managerId = this.registerForm.value.manager;
      const typeContratId = this.registerForm.value.typeContrat;

      this.userService.getDepartmentById(departementId).subscribe(departement => {
      user.departement = departement;
      if(managerId == null){
        this.userService.registreEmployee(user).subscribe(data => {
          console.log(data);
          this.userService.getTypeById(typeContratId).subscribe(typeContrat => {
            contrat.typeContrat = typeContrat;
          this.userService.addContrat(contrat).subscribe(data => {
            console.log(data);
          },
          error => console.log(error))
        })
          this.goToEmployeeList();
        },
          error => console.log(error))
      } else {
      this.userService.getManagerById(managerId).subscribe(manager => {
        user.manager = manager;
        
        this.userService.registreEmployee(user).subscribe(data => {
        console.log(data);
        this.userService.getTypeById(typeContratId).subscribe(typeContrat => {
          contrat.typeContrat = typeContrat;
        this.userService.addContrat(contrat).subscribe(data => {
          console.log(data);
        },
        error => console.log(error))
      })
        this.goToEmployeeList();
      },
        error => console.log(error))
    
      });
    }
    });
         
    }
  }

  goToEmployeeList() {
    this.router.navigate(['/list-employees']);
  }

  registreEmployee() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.saveEmployee();
  }

}