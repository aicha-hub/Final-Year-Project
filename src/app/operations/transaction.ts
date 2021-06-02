export class transaction{
    codeTransaction:Number ; //identifiant de la transaction
    typeTransaction:String; //type de la transaction : credit, debit
    statutTransaction:String; //statut de la transaction : achevée ou bloquée
    montant:Number;//montant
    dateTransaction:Date; //date de la transaction
    nomEmetteur:String; //nom du l'emetteur
    typeCompteEmetteur:String;//type du compte de l'emetteur
    ribEmetteur:Number;//rib de l'emetteur
    nomDestinataire:String;//nom du Destinataire
    paysDestinataire:String;//pays du Destinataire
    ribDestinataire:String; //RIB du Destinataire
    compteTransaction:number;
    cinDestinataire:number;
    cinEmetteur:number;
    motif:String;
    nomBanque:String;
}