import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { compte } from 'app/compte/compte';
import { CompteCourantService } from 'app/service_clients/compte-courant.service';
import { ToastrService } from 'ngx-toastr';
import { risqueTransaction } from '../risqueTransaction';
import { OperationService } from '../service/operation.service';
import { transaction } from '../transaction';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  message:any;
  transaction: risqueTransaction;
  compte: compte;
  constructor(@Inject(MAT_DIALOG_DATA) public data1,public dialogRef: MatDialogRef<ConfirmationComponent>,private snackBar: MatSnackBar,private service:OperationService,private toastr : ToastrService) { }

  ngOnInit(): void {

 
   
  }

  confirmer()
  { 
    let resp= this.service.getRisqueTransaction();
    resp.subscribe( ((res: risqueTransaction) => {
console.log(res);
      this.transaction = res;
      if(this.transaction.montantMaximal==true)
      {this.toastr.warning("Le montant dépasse 5000 dinars");}
      if(this.transaction.paysBlackList)
      {this.toastr.warning("Le pays destinataire existe dans la liste noire");}
      if(this.transaction.personneD==true)
      {this.toastr.warning("Le personne destinataire existe dans la liste noire");}
      if(this.transaction.personneE==true)
      {this.toastr.warning("Le personne destinataire existe dans la liste noire");}
      if(this.transaction.compteInactif)
      {this.toastr.warning("Ce compte est inactif depuis une année");}
      if((this.transaction.montantMaximal==false)&&(this.transaction.paysBlackList==false)&&(this.transaction.personneD==false)&&(this.transaction.personneE==false)&&(this.transaction.compteInactif==false))
  {let snackBarRef = this.snackBar.open('operation enregistrée!', 'avec succés', {
    duration: 3000
  });
  
}
this.dialogRef.close();}));
   
  }

  Close()
  {
    let resp= this.service.getRisqueTransaction();
    resp.subscribe( ((res: risqueTransaction) => {
      this.transaction=res;
      console.log(res);
      let resp1= this.service.deleteTransaction(this.transaction.num);
      resp1.subscribe((data)=> {
        console.log(data);
        this.dialogRef.close();
      },
      error => console.log(error));   }));
    }


}
