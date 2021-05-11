import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { parente } from 'app/client/parente';
import { ParenteService } from 'app/service_clients/parente.service';

@Component({
  selector: 'app-parente',
  templateUrl: './parente.component.html',
  styleUrls: ['./parente.component.css']
})
export class ParenteComponent implements OnInit {
  parente:parente =new parente();
 
  message:any;
  id:number;
 

  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service1:ParenteService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<ParenteComponent>) { }

 
  ngOnInit(): void {                                                                                                    
    this.id=this.data1.Code_clt;
    this.parente.persPhy=this.id;   
   
  
  }


  OnCreateNAT()
  {let snackBarRef = this.snackBar.open('Parente est ajoutée!', 'Bravo', {
    duration: 3000
  });
 
  let resp= this.service1.CreateNAT(this.parente);
     resp.subscribe((data)=>this.message=data);    
     this.dialogRef.close();
  }

  Close()
  {this.dialogRef.close();}

}



