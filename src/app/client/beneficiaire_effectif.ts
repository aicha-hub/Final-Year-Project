import { contact } from "./contact";
import { personne_morale } from "./personne_morale";
import { personne_physique } from "./personne_physique";

export class beneficaire_effectif extends personne_physique
{
     Raison_sociale:String ;
     Pourcentage:String ;
     personneMoraleArrayList:personne_morale[]=[];
}