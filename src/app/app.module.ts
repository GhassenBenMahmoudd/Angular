import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { RegistreEmployeeComponent } from './registre-employee/registre-employee.component';
import { ItemFilterPipe } from './list-employe/item-filter.pipe';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PointageComponent } from './pointage/pointage.component';
import { FilterPipe } from './list-formation/filter.pipe';
import { PointageFilterPipe } from './pointage/pointage-filter.pipe';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPointageComponent } from './add-pointage/add-pointage.component';
import { EvalChaudComponent } from './eval-chaud/eval-chaud.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ListNotificationComponent } from './list-notification/list-notification.component';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { AddEventComponent } from './add-event/add-event.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ParametreComponent } from './parametre/parametre.component';
import { TypeContratComponent } from './type-contrat/type-contrat.component';
import { AddTypeContratComponent } from './add-type-contrat/add-type-contrat.component';
import { ListMessageComponent } from './list-message/list-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    ListEmployeComponent,
    RegistreEmployeeComponent,
    ItemFilterPipe,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    ResetPasswordComponent,
    ProfileComponent,
    ListFormationComponent,
    UpdateFormationComponent,
    FormationDetailsComponent,
    AjouterFormationComponent,
    PointageComponent,
    FilterPipe,
    PointageFilterPipe,
    SideNavComponent,
    AddPointageComponent,
    EvalChaudComponent,
    AddSessionComponent,
    ListNotificationComponent,
    ListRapportComponent,
    DashboardComponent,
    CalendarComponent,
    AddEventComponent,
    UpdateSessionComponent,
    SessionDetailsComponent,
    ForgotPasswordComponent,
    EventComponent,
    UpdateEventComponent,
    EvalFroidComponent,
    SendAlerteComponent,
    ContratComponent,
    ContratAjouteComponent,
    ListUserManagerComponent,
    ListDepartementComponent,
    AddDepartementComponent,
    ParametreComponent,
    TypeContratComponent,
    AddTypeContratComponent,
    ListMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FullCalendarModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
