import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPointageComponent } from './add-pointage/add-pointage.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { LoginComponent } from './login/login.component';
import { PointageComponent } from './pointage/pointage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistreEmployeeComponent } from './registre-employee/registre-employee.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { EvalChaudComponent } from './eval-chaud/eval-chaud.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ListNotificationComponent } from './list-notification/list-notification.component';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventComponent } from './event/event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EvalFroidComponent } from './eval-froid/eval-froid.component';
import { SendAlerteComponent } from './send-alerte/send-alerte.component';
import { ContratComponent } from './contrat-list/contrat.component';
import { ContratAjouteComponent } from './contrat-ajoute/contrat-ajoute.component';
import { ListUserManagerComponent } from './list-user-manager/list-user-manager.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { TypeContratComponent } from './type-contrat/type-contrat.component';
import { AddTypeContratComponent } from './add-type-contrat/add-type-contrat.component';
import { ListMessageComponent } from './list-message/list-message.component';


const routes: Routes = [
  { path: 'add-pointage', component: AddPointageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent},
  { path: '', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'list-employees', component: ListEmployeComponent},
  { path: 'registerNewUser', component: RegistreEmployeeComponent},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent},
  { path: 'reset-password/:id', component: ResetPasswordComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'list-formation', component: ListFormationComponent},
  { path: 'update-formation/:id', component: UpdateFormationComponent},
  { path: 'formation-details/:id', component: FormationDetailsComponent},
  { path: 'ajouter-formation', component: AjouterFormationComponent},
  { path: 'pointage', component:PointageComponent},
  { path: 'eval-chaud', component:EvalChaudComponent},
  { path: 'add-session/:id', component:AddSessionComponent},
  { path: 'list-notification', component:ListNotificationComponent},
  { path: 'list-rapport', component:ListRapportComponent},
  { path: 'dashborad', component:DashboardComponent},
  { path: 'calendar', component:CalendarComponent},
  { path: 'add-event', component:AddEventComponent},
  { path: 'session-details/:id', component:SessionDetailsComponent},
  { path: 'update-session/:id', component:UpdateSessionComponent},
  { path: 'forget-password', component:ForgotPasswordComponent},
  { path: 'list-event', component:EventComponent},
  { path: 'update-event/:id', component:UpdateEventComponent},
  { path: 'eval-froid', component:EvalFroidComponent},
  { path: 'send-alerte', component:SendAlerteComponent},
  { path: 'liste-contrat', component:ContratComponent},
  { path: 'ajouter-contrat', component:ContratAjouteComponent},
  { path: 'list-user-manager', component:ListUserManagerComponent},
  { path: 'parametre', component:ParametreComponent},
  { path: 'list-departement', component:ListDepartementComponent},
  { path: 'add-departement', component:AddDepartementComponent},
  { path: 'list-type-contrat', component:TypeContratComponent},
  { path: 'add-type-contrat', component:AddTypeContratComponent},
  { path: 'list-message', component:ListMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
