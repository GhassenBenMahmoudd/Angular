import { Session } from "./session";

export class Formation {
    idFormation?:number;
    libelle?:String;
    sujet?:String;
    sessions: Session[]=[];
    
}
