
import { Employee } from "./employee";
import { Formation } from "./formation";

export class Session {
    idSession?:number;
    nomSession?:String;
	dateDebut?:Date;
	dateFin?: Date;
    nomFormateur?:String;
    users?:Employee[];
    formation?: Formation;
}
