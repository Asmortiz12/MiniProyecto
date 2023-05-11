import{Person} from "./person"

 export interface Student extends Person  {
    registracionCode:number;
    carrer:string;
    level:string;
    
}