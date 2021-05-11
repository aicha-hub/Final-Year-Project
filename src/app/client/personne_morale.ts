import { beneficaire_effectif } from "./beneficiaire_effectif";
import { contact } from "./contact";
import { representant_legal } from "./representant_legal";

export class personne_morale extends contact {

    denominationSociale:String; //Denomination sociale
    objetSocial :String;// Objet social de la personne morale
    matriculeFiscale:Number; // Matricule fiscale de la personne morale
    dateConstrution:Date; //date construction
    paysConstruction :String; //pays de construction
    dateEnregistrement:Date; //date d'enregistrement
    associesPpe :boolean; //true s'il y a des associes politiquement exposés
    natureOperation :String; //nature de l'operation de la PM
    origineFonds:String; //origine des fonds de la personne Morale
    paysOrigineFonds:String; //specification de l'origine si false
    nature:String; //nature personne morale
    domaineActivite :String; //domaine d'activite de la personne morale
    anciennetéProfesionelle :String; //anciennete de la personne
    formeJuridique :String;
    representants:representant_legal[]=[];
    beneficiaireEffectifList:beneficaire_effectif[]= new Array();
    us:boolean ; //true si La société est créée en vertu de la loi américaine
    actionnaireUs:boolean;//true si  	Le capital de la société 
    // est détenu par un actionnaire ou plus qui sont des contribuables américains
    giin:boolean ;
    statutFatca:boolean;
    actionnaireOffshore:boolean;
    marcheBoursier:boolean;
    participationPub:boolean;
    secteurTravail:String;
    chiffreAffaire:Number;
}