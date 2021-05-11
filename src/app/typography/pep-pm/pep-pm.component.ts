import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { liste_nat } from 'app/client/list_nat';
import { pays } from 'app/client/pays';
import { pep } from 'app/client/pep';
import { PepServiceService } from 'app/pep/service_pep/pep-service.service';

@Component({
  selector: 'app-pep-pm',
  templateUrl: './pep-pm.component.html',
  styleUrls: ['./pep-pm.component.css']
})
export class PepPMComponent implements OnInit {

  pays: pays[] = [
    { id:1, name: 'Tunisie' },
    { id:2, name: 'Turquie' },
    { id:3, name: 'Suède'  },
    { id:4, name: 'Brazil' }
  ];
  
  
  pep :pep =new pep();
  liste_nationnalite=liste_nat;
  message:any;
  id:number;


  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service:PepServiceService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<PepPMComponent>) { }

 
  ngOnInit(): void {   
    this.id=this.data1.codeClient;
    this.pep.contact=this.id;   
                                                                                                 
   
  }
  
  onSet() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  OnCreatePEP ()
  {let snackBarRef = this.snackBar.open('Ajoutée!', 'Bravo', {
    duration: 3000
  });
  
  let resp= this.service.CreatePR(this.pep);
     resp.subscribe((data)=>this.message=data);
     
  }

  Close()
  {this.dialogRef.close();}
}
