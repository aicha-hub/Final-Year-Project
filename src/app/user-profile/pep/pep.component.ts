import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { pep } from 'app/client/pep';
import { revenu } from 'app/client/revenu';
import { PepServiceService } from 'app/pep/service_pep/pep-service.service';
import { RevenuService } from 'app/service_clients/revenu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.css']
})
export class PepComponent implements OnInit {
  revenu :revenu =new revenu();
  message:any;
  id:number;
  form: NgForm;
  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service:RevenuService,private toastr : ToastrService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<PepComponent>) { }


  ngOnInit(): void {                                                                                                    
    this.id=this.data1.Code_clt;
    this.revenu.persPhy=this.id;
    
  }

  
  OnCreate ()
  { if(this.revenu.nature==null){this.toastr.warning("Veuillez remplir la nature du revenu");}
  if(this.revenu.periodicite==null){this.toastr.warning("Veuillez remplir la periodicite du revenu");}
  if(this.revenu.devise==null){this.toastr.warning("Veuillez remplir le devise du revenu");}
  if(this.revenu.montant==null){this.toastr.warning("Veuillez remplir le montant du revenu");}
  if((this.revenu.nature!=null)&&(this.revenu.periodicite!=null)&&(this.revenu.devise!=null)&&(this.revenu.montant!=null))
  {
  let snackBarRef = this.snackBar.open('Le revenu a été ajouté!', 'Bravo', {duration: 3000});
  let resp= this.service.CreateR(this.revenu);
   resp.subscribe((data)=>this.message=data);
  }

  }

  Close()
  {this.dialogRef.close();}

}
