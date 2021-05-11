import { personne_physique } from "./personne_physique";

export class revenu{
    codeRevenu:number; //code Revenu
    revenuNet:number; //revenu net de la personne physique
    deviseRevenuNet:String; //devise du revenu net
    nature:String; //nature des autres revenus
    montant:number;//montant de ce revenu
    devise:String; //devise de ce revenu
    periodicite:String; //periodicite de ce revenu
    persPhy:number;
    
}