import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { UserService } from '../_services/user.service';
import { Employee } from '../employee';
import { Session } from '../session';


@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent {
  id: number
  formation: Formation
  sessions: Session[] = [];
  employees: Employee[];
  session: Session;
  constructor(private route: ActivatedRoute, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getFormationById(this.id).subscribe(data => {
      this.formation = data;
      this.sessions = data.sessions;
    });
  }

  addSession(idFormation: number) {
    this.router.navigate(['add-session', idFormation]);
  }

  supprimerSession(idFormation: number, idSession: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette session ?')) {
      this.userService.suppSession(idFormation, idSession).subscribe(
        () => {
          console.log(`Session ${idSession} supprimée de la formation ${idFormation}`);
          // Mettre à jour la liste des sessions de la formation ici
          this.sessions = this.sessions.filter(session => session.idSession !== idSession);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  sessionDetails(idSession: number) {
    this.router.navigate(['session-details', idSession]);
  }
  updateSession(idSession: number) {
    this.router.navigate(['update-session', idSession]);
  }

}

