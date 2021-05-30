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
  compt :compte;
  liste_nationnalite=liste_nat;
  form: FormGroup ;

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
      date2: new FormControl(''),
  
    });
   
  }

  virement(rib:number,v1:number,v2:String,v3:number)
  {
    this.d=+v2;
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
      console.log(res1);
      this.compt = res1;
    if(isEmptyObject(this.compt))    {this.toastr.error("Le compte de l'emetteur n'existe pas");}
    if(v1==this.d) {this.toastr.error("veuillez vérifier le RIB de votre destinataire et de votre emetteur");}
    if(v3>this.compt.solde)  {this.toastr.error("Solde insuffisant");}
    else{
      let resp= this.service.virement(this.transaction);
      resp.subscribe((data)=>this.message=data);
      console.log(this.message);
      this.confirmer();}
    
    }));
   this.router.navigate(['/listeTransactions']);
  }
   

  prelevement(v3)
  {
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
    console.log(res1);
    this.compt = res1;
   if(isEmptyObject(this.compt))    {this.toastr.error("Le compte de l'emetteur n'existe pas");}
  if(v3>this.compt.solde)  {this.toastr.error("solde insuffisant");}
  else{
    let resp= this.service.prelevement(this.transaction);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.message);
    this.confirmer();}
  
  }));}

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
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
    console.log(res1);
    this.compt = res1;
   if(isEmptyObject(this.compt))    {this.toastr.error("Le compte de l'emetteur n'existe pas");}
   //if(v3>this.compt.solde)  {this.toastr.error("Le solde est insuffisant");}
  else{
    let resp= this.service.versement(this.transaction);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.message);
    this.confirmer();}
  
  }));}
}
