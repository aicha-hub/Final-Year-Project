import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private service:OperationService, private snackBar: MatSnackBar,private dialog: MatDialog, private toastr : ToastrService,private servicec : CompteCourantService) { }

  ngOnInit(): void {
   
   
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
    if(v3>this.compt.solde)  {this.toastr.error("Le solde est insuffisant");}
    else{
      let resp= this.service.virement(this.transaction);
      resp.subscribe((data)=>this.message=data);
      console.log(this.message);
      this.confirmer();}
    
    }));}
   

  prelevement(v3)
  {
    this.i=this.transaction.compteTransaction;
    let resp1= this.servicec.getCompte(this.i);
    resp1.subscribe( ((res1: compte) => {
    console.log(res1);
    this.compt = res1;
   if(isEmptyObject(this.compt))    {this.toastr.error("Le compte de l'emetteur n'existe pas");}
  if(v3>this.compt.solde)  {this.toastr.error("Le solde est insuffisant");}
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
  if(v3>this.compt.solde)  {this.toastr.error("Le solde est insuffisant");}
  else{
    let resp= this.service.versement(this.transaction);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.message);
    this.confirmer();}
  
  }));}
}
