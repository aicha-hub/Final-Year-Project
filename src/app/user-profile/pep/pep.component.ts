import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pep } from 'app/client/pep';
import { PepServiceService } from 'app/pep/service_pep/pep-service.service';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.css']
})
export class PepComponent implements OnInit {
  pep :pep =new pep();
  message:any;
  id:number;


  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service:PepServiceService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<PepComponent>) { }

 
  ngOnInit(): void {                                                                                                    
    this.id=this.data1.Code_clt;
    this.pep.contact=this.id;   
  }


  OnCreatePEP ()
  {let snackBarRef = this.snackBar.open('PEP est ajoutée!', 'Bravo', {
    duration: 3000
  });
  
  let resp= this.service.CreatePR(this.pep);
     resp.subscribe((data)=>this.message=data);
     this.dialogRef.close();
  }

  Close()
  {this.dialogRef.close();}
}
