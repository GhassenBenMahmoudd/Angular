import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from '../employee';
import { Formation } from '../formation';
import { Pointage } from '../pointage';
import { Role } from '../role';
import { UserAuthService } from './user-auth.service';
import { Session } from '../session';
import { Notif } from '../notif';
import { Event } from '../event';
import { Message } from '../message';
import { Manager } from '../manager';
import { Contrat } from '../contrat';
import { Departement } from '../departement';
import { TypeContrat } from '../type-contrat';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8082';
  baseUrl = 'http://localhost:8082/employees';
  baseUrl2 = 'http://localhost:8082/changePassword';


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  sessions: any;
  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  forgotPassword(user) {
    return this.httpClient.put(`${this.PATH_OF_API}/forget-password`, user, {
      headers: this.requestHeader,
    });
  }

  login(loginData) {
    return this.httpClient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  sendEmail(emailCapgemini:String){
    return this.httpClient.post(this.PATH_OF_API + '/sendingEmail', emailCapgemini);
  }

  sendEvalchaud(emailData){
    return this.httpClient.post(this.PATH_OF_API + '/sendingEvalchaud', emailData);
  }

  sendEvalfroid(emailData){
    return this.httpClient.post(this.PATH_OF_API + '/sendingEvalfroid', emailData);
  }

  changePassword(idCapgemini: number,passData){
    return this.httpClient.post(`${this.baseUrl2}/${idCapgemini}`, passData);
  }

  listRole(): Observable<Role[]>{
    return this.httpClient.get<Role[]>(this.PATH_OF_API+ '/listRoles');
}

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
}

  registreEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(this.PATH_OF_API + '/registerNewUser', employee);
  }

  updateEmployee(idCapgemini: number,employee: Employee): Observable<Object>{
    return this.httpClient.put(this.baseUrl+'/'+idCapgemini, employee);
  }
  archiveEmployee(idCapgemini: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${idCapgemini}/archive`, {});
  }
  getUserById(id: number){
    return this.httpClient.get<Employee>(`${this.PATH_OF_API}/${id}`)
                      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

/*pointage fonctions*/
getPointageList(): Observable<Pointage[]>{
  return this.httpClient.get<Pointage[]>(this.PATH_OF_API+'/listPointage');
}
createPointage(pointage: Pointage): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createPointage', pointage);
}
deletePointage(idPointage: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/deletePointage/'+idPointage);
}
getPointageById(id: number){
  return this.httpClient.get<Pointage>(`${this.PATH_OF_API}/getPointageById/${id}`);
}

/*formation fonctions*/
ajouterFormation(formation: Formation): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createFormation', formation);
}
updateFormation(idFormation: number,formation: Formation): Observable<Object>{
  return this.httpClient.put(this.PATH_OF_API+'/formations/'+idFormation, formation);
}

suppFormation(idFormation: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/annulerFormation/'+idFormation, {});
}
getFormationList(): Observable<Formation[]>{
  return this.httpClient.get<Formation[]>(this.PATH_OF_API+"/listFormation");
}
getFormationById(id: number){
return this.httpClient.get<Formation>(`${this.PATH_OF_API}/getFormationById/${id}`)
                  .pipe(catchError(this.handleError));
}

// Session fonctions
ajouterSession(formationId: number,session: Session): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/formations/'+formationId+'/sessions', session);
}
updateSession(idSession: number,session: Session): Observable<Object>{
  return this.httpClient.put(this.PATH_OF_API+'/sessions/'+idSession, session);
}
suppSession(idFormation:number,idSession: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/formations/'+idFormation+'/sessions/'+idSession ,{});
}
getSessionList(formationId:number): Observable<Session[]>{
  return this.httpClient.get<Session[]>(this.PATH_OF_API+'/formations/'+formationId+'/session');
}
getSessionById(id: number){
return this.httpClient.get<Session>(`${this.PATH_OF_API}/getSessionById/${id}`)
                  .pipe(catchError(this.handleError));
}
  
/*gestion des notifications */

suppNotification(idNotification: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/suppNotification/'+idNotification, {});
}
getNotificationList(): Observable<Notif[]>{
  return this.httpClient.get<Notif[]>(this.PATH_OF_API+"/listNotification");
}
getNotificationById(id: number){
return this.httpClient.get<Notif>(`${this.PATH_OF_API}/getNotificationById/${id}`)
                  .pipe(catchError(this.handleError));
}
getUnreadCount(): Observable<number>{
  return this.httpClient.get<number>(this.PATH_OF_API+"/unreadNotificationCount");

}
markNotificationAsRead(id: number){
  return this.httpClient.put(this.PATH_OF_API+'/notifications/'+id,{});
}

//generation des rapport

generateReport(): Observable<Blob> {
  return this.httpClient.get(`${this.PATH_OF_API}/report`, { responseType: 'blob' }).pipe(
    catchError((error: any) => {
      console.error('Error generating report:', error);
      return error;
    }),
    map((response: any) => response as Blob)
  );
}
/*
generateAttestation(id: number): Observable<Blob> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'blob' as 'json' // La réponse sera un fichier PDF
    })
  };
  const url = `${this.PATH_OF_API}/attestation/${id}`;
  return this.httpClient.get<Blob>(url, httpOptions);
}*/

//Dashboard
getUserWithGenre(): Observable<any> {
  return this.httpClient.get<any>(this.PATH_OF_API+'/getUserWithGenre');
}
getUserWithContrat(): Observable<any> {
  return this.httpClient.get<any>(this.PATH_OF_API+'/getUserWithContrat');
}
getUserWithDepartement(): Observable<any> {
  return this.httpClient.get<any>(this.PATH_OF_API+'/getUserWithDepartement');
}
getUserWithAge(): Observable<any> {
  return this.httpClient.get<any>(this.PATH_OF_API+'/getUserWithAge');
}

//gestion Evenements
getEvents(): Observable<Event[]> {
  return this.httpClient.get<Event[]>(this.PATH_OF_API+'/getAllEvents');
}
addEvent(event: Event): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createEvent', event);
}
updateEvent(idEvent: number,event: Event): Observable<any>{
  return this.httpClient.put(this.PATH_OF_API+'/event/'+idEvent, event);
}
getEventById(idEvent: number){
  return this.httpClient.get<Event>(this.PATH_OF_API+'/events/'+idEvent)
                    .pipe(catchError(this.handleError));
}
deleteEvent(idEvent: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/annulerEvenement/'+idEvent);
}

//gestion message
getUnreadCountMessage(id: number): Observable<number>{
  return this.httpClient.get<number>(this.PATH_OF_API+"/getUnreadCount/"+id);

}
markMessageAsRead(id: number){
  return this.httpClient.put(this.PATH_OF_API+'/markMessageAsRead/'+id,{});
}
getMessage(id: number): Observable<Message[]>{
  return this.httpClient.get<Message[]>(this.PATH_OF_API+'/message/'+id);
}

sendMessage(message: Message): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/sendMessage', message);
}  
suppMessage(id: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/suppMessage/'+id, {});
}

//Gestion Manager
getAllManager(): Observable<Manager[]>{
  return this.httpClient.get<Manager[]>(this.PATH_OF_API+"/getAllManager");
}
getUserListManager(idManager: number): Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(this.PATH_OF_API+"/getUsersByManager/"+idManager);
}
getManagerById(idManager: number){
  return this.httpClient.get<Manager>(this.PATH_OF_API+'/managers/'+idManager)
                    .pipe(catchError(this.handleError));
}

//gestion Contrat
getListContrats(): Observable<Contrat[]> {
  return this.httpClient.get<Contrat[]>(this.PATH_OF_API+'/getAllContrats');
}
addContrat(contrat: Contrat): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createContrat', contrat);
}
getContratById(idContrat: number){
  return this.httpClient.get<Contrat>(this.PATH_OF_API+'/getContratById/'+idContrat)
                    .pipe(catchError(this.handleError));
}
deleteContrat(idContrat: number): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/annulerContrat/'+idContrat);
}

//gestion TypeContrat
getListTypes(): Observable<TypeContrat[]> {
  return this.httpClient.get<TypeContrat[]>(this.PATH_OF_API+'/getAllTypeContrats');
}
addType(typeContrat: TypeContrat): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createTypeContrat', typeContrat);
}
getTypeById(nomType: string){
  return this.httpClient.get<TypeContrat>(this.PATH_OF_API+'/getTypeContratById/'+nomType)
                    .pipe(catchError(this.handleError));
}
deleteType(nomType: string): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/annulerTypeContrat/'+nomType);
}

//Gestion departement 
getAllDepartements(): Observable<Departement[]>{
  return this.httpClient.get<Departement[]>(this.PATH_OF_API+"/getAllDepartements");
}
addDepartement(dept: Departement): Observable<Object>{
  return this.httpClient.post(this.PATH_OF_API + '/createDepartements', dept);
}
deleteDepatement(nomDept: string): Observable<any> {
  return this.httpClient.delete(this.PATH_OF_API+'/annulerDepartements/'+nomDept);
}
getDepartmentById(nomDept: string){
  return this.httpClient.get<Departement>(this.PATH_OF_API+'/getDepartementsById/'+nomDept)
                    .pipe(catchError(this.handleError));
}


}

