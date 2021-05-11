import { contact } from "./contact";
import { nationalite } from "./nationalite";
import { parente } from "./parente";
import { persNat } from "./persNat";
import { revenu } from "./revenu";

export class personne_physique extends contact{
    nom:String; //nom personne physique
    prenom:String; //prenom personne physique
    dateNaissance:Date; //date naissance de la personne physique
    usResident:boolean; //true si la personne physique reside de facon permanente
    numPassport:String; //numero du passport
    numCin:number; //numero de carte d'identite de la personne physique
    carteSejour:String; //numero carte sejour
    etatCivil:String; //etat civil
    sexe:String; //sexe
    dateLivraisonCin:Date; //date de livraison de la carte d'identite
    dateExpirationCin:Date; //date d'expiration de la carte d'identite
    dateLivraisonPassport:Date;  //date de livraison de la carte
    dateExpirationPassport:Date; //date d'expiration de la carte
    dateLivraisonCarteSejour:Date;//date de livraison de la carte
    dateExpirationCarteSejour:Date; //date d'expiration de la carte
    capaciteJuridique:String; //capacite juridique
    catSocioprofessionnelle:String; // categorie socioprofessionnelle
    profession:String; //profession de la personne physique
    categorieEmployeur:String;  //Catégorie Employeur
    secteurTravail:String; //secteur Travail
    contratTravail:String; //Contrat
    dateTitularisation:Date; //date Titularisation
    paysTravail:String; //pays du travail
    paysNaissance:String; //pays de la naissance
    numeroRne:String; //numero RNE
    dateExtraitRne:Date;  //date extrait RNE
    regimeFiscal:String; //regime fiscal
    matriculeFiscaleP:number; //matricule Fiscale
    codeDouane:String; //code Douane
    affSociale:String; //affiliation sociale
    numAff:number;//numero affiliation
    situationHabitation:String; //SITUATION D'HABITATION
    parentePep:boolean; //si quelqu'un de sa famille est PE
    statutPep:boolean; //s'il est politiquement expose
    carteVerte:boolean; //si la personne detient une carte verte
    statutFatca:boolean; //si la personne doit payer des taxes à US
    nationalites:nationalite[]=[];
    listRevenu=Array<revenu>();
    listPersPar=Array<parente>();
    listPersNat1=Array<persNat>();

}
