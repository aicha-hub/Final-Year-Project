import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { liste_nat } from 'app/client/list_nat';
import { compte } from 'app/compte/compte';
import { CompteCourantService } from 'app/service_clients/compte-courant.service';
import { isEmptyObject } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OperationService } from './service/operation.service';
import { transaction } from './transaction';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  operations : String[]=
  ['virement','versement','prelevement']
  transaction:transaction=new transaction();
  message:any;
  ch:string;
  d:number;
  i:number;
  f:number;
  compt :compte;
  compt1 :compte;
  liste_nationnalite=liste_nat;
  form: FormGroup ;
  test=false;
  test1=false;
  test2=false;
  constructor(private service:OperationService, private snackBar: MatSnackBar,private dialog: MatDialog, private toastr : ToastrService,private servicec : CompteCourantService, private router: Router) { }

  ngOnInit(): void {
    this.form= new FormGroup({
   
      operation : new FormControl('',Validators.required),
      nomEmetteur: new FormControl('', Validators.required),
     
      compteTransaction : new FormControl(0, Validators.required),
      nomDestinataire: new FormControl('', Validators.required),
     
      ribDestinataire : new FormControl('', Validators.required),
      montant: new FormControl(0, Validators.required),
      paysDestinataire : new FormControl('', Validators.required),
      date: new FormControl(''),
      motif: new FormControl('', Validators.required),
      nomEmetteur1: new FormControl('', Validators.required),
    
      //typeCompteEmetteur1:new FormControl('', Validators.required),
      compteTransaction1:new FormControl('', Validators.required),
      montant1: new FormControl(0, Validators.required),
      date1: new FormControl(''),
      nomEmetteur2: new FormControl('', Validators.required),
     
      //typeCompteEmetteur2:new FormControl('', Validators.required),
      compteTransaction2:new FormControl('', Validators.required),
      montant2: new FormControl(0, Validators.required),
      nombanque: new FormControl('', Validators.required),
      date2: new FormControl(''),
  
    });
   
  }

  virement(rib:number,v1:number,v2:String,v3:number)
  {
    this.d=+v2;
    this.i=this.transaction.compteTransaction;
    this.f=+this.transaction.ribDestinataire;
    if(this.transaction.nomEmetteur==null){this.toastr.warning("Le nom de l'emetteur est vide");}
    if(this.transaction.nomDestinataire==null){this.toastr.warning("Le nom du destinataire est vide");}
    if(this.transaction.compteTransaction==null){this.toastr.warning("Le RIB du destinataire est vide");}
    if(this.transaction.montant==null){this.toastr.warning("Le montant  est vide");}
    if(this.transaction.paysDestinataire==null){this.toastr.warning("Le pays de destinataire n'est pas selectionné");}
    if(this.transaction.nomBanque==null){this.toastr.warning("Le nom de la banque est vide");}
    if((this.transaction.nomEmetteur!=null)&&(this.transaction.nomDestinataire!=null)&&(this.transaction.compteTransaction!=null)
    &&(this.transaction.montant!=null)&&(this.transaction.nomBanque!=null)
    &&(this.transaction.paysDestinataire!=null))
    {
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
      console.log(res1);
      this.compt = res1;
    if(isEmptyObject(this.compt))    {this.toastr.warning("Le compte de l'emetteur n'existe pas"); this.test=true;}
    if((v1==this.d)&&((this.transaction.nomBanque=="BFI")||(this.transaction.nomBanque=="bfi"))) {this.toastr.warning("veuillez vérifier le RIB de votre destinataire et de votre emetteur"); this.test=true;}
    if(v3>this.compt.solde)  {this.toastr.warning("Solde insuffisant"); this.test=true;}
  
if(!this.test){
         if((this.transaction.nomBanque=="BFI")||(this.transaction.nomBanque=="bfi"))
         {let res2= this.servicec.getCompte(this.f);
         res2.subscribe( ((res2: compte) => { 
         this.compt1 = res2;
               if(isEmptyObject(this.compt1))    {this.toastr.warning("Le compte de destinataire n'existe pas");}
               else{
               let resp= this.service.virement(this.transaction);
               resp.subscribe((data)=>this.message=data);
               console.log(this.message);
               this.confirmer();
                  }   
          }));
         console.log(res2); 
         }
         else{let resp= this.service.virement(this.transaction);
         resp.subscribe((data)=>this.message=data);
         console.log(this.message);
         this.confirmer();}
      }
    
    }));
  } }
   


  prelevement(v3)
  {
    if(this.transaction.nomEmetteur==null){this.toastr.warning("Le nom de l'emetteur est vide");}
    if(this.transaction.compteTransaction==null){this.toastr.warning("Le RIB du destinataire est vide");}
    if(this.transaction.montant==null){this.toastr.warning("Le montant  est vide");}
    if((this.transaction.nomEmetteur!=null)&&(this.transaction.compteTransaction!=null)
    &&(this.transaction.montant!=null)
      )
      {
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
    console.log(res1);
    this.compt = res1;
   if(isEmptyObject(this.compt))    {this.toastr.error("Le compte de l'emetteur n'existe pas"); this.test1=true; }
  if(v3>this.compt.solde)  {this.toastr.warning("solde insuffisant"); this.test1=true; }
  if(!this.test1){
    let resp= this.service.prelevement(this.transaction);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.message);
    this.confirmer();} 
  }));}}



  confirmer()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data = {};
    dialogConfig.width = "60%";
    this.dialog.open(ConfirmationComponent,dialogConfig);    
  }



  versement(v3)
  {
    if(this.transaction.nomEmetteur==null){this.toastr.warning("Le nom de l'emetteur est vide");}
    if(this.transaction.compteTransaction==null){this.toastr.warning("Le RIB du destinataire est vide");}
    if(this.transaction.montant==null){this.toastr.warning("Le montant  est vide");}
    if((this.transaction.nomEmetteur!=null)&&(this.transaction.compteTransaction!=null)
    &&(this.transaction.montant!=null)
      )
      {
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
    console.log(res1);
    this.compt = res1;
   if(isEmptyObject(this.compt))    {this.toastr.warning("Le compte de l'emetteur n'existe pas");}
   //if(v3>this.compt.solde)  {this.toastr.error("Le solde est insuffisant");}
  else{
    let resp= this.service.versement(this.transaction);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.message);
    this.confirmer();}
  
  }));}}
}
