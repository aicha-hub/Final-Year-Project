import { personne_morale } from "./personne_morale";
import { personne_physique } from "./personne_physique";

export class representant_legal extends personne_physique{

    Fonction_organisme:String  ;
    personneMoraleList:personne_morale[]=[];
}