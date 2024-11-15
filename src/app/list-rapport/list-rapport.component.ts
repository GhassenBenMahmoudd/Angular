import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-rapport',
  templateUrl: './list-rapport.component.html',
  styleUrls: ['./list-rapport.component.css']
})
export class ListRapportComponent {
  employeeId: number;
  attestationBlob: Blob;
  list:String;
  constructor(public userService: UserService){}

  generateReport() {
    this.userService.generateReport().subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        window.open(url);
      },
      (error) => {
        console.error('Error generating report:', error);
      }
    );
  }
 /* generateAttestation(): void {
    this.userService.generateAttestation(this.employeeId)
      .subscribe(blob => {
        this.attestationBlob = blob;
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl); // Ouvrir le fichier PDF dans un nouvel onglet
      });
  }*/
}
