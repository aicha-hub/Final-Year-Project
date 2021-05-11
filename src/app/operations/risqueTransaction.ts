export class risqueTransaction{
    num:number ; //identifiant de la transaction
    personneE:boolean; //type de la transaction : credit, debit
    personneD:boolean; //statut de la transaction : achevée ou bloquée
    paysSecteurSuspect:boolean;//montant
    paysBlackList:boolean; //date de la transaction
    montantMaximal:boolean; //nom du l'emetteur
    compteInactif:boolean//type du compte de l'emetteur
  
}