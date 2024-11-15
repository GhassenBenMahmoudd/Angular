import { Employee } from "./employee";
import { TypeContrat } from "./type-contrat";

export class Contrat {
    idContrat?: number;
    typeContrat?: TypeContrat;
    startDate?: Date;
    endDate?: Date;
    salaire?: number;
    user?: Employee;

}
