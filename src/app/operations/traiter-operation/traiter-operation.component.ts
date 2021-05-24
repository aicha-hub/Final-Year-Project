import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationDouteuseService } from '../operation-douteuse.service';
import { OperationService } from '../service/operation.service';
import { transaction } from '../transaction';
@Component({
  selector: 'app-traiter-operation',
  templateUrl: './traiter-operation.component.html',
  styleUrls: ['./traiter-operation.component.css']
})
export class TraiterOperationComponent implements OnInit {
  id:number;
  risqueTransaction:any;
  transaction1: transaction =new transaction();
  message :any ;
  constructor(@Inject(MAT_DIALOG_DATA) public data1,public dialogRef: MatDialogRef<TraiterOperationComponent>,private router: Router,private route: ActivatedRoute, private service : OperationDouteuseService, private snackBar : MatSnackBar, public service1: OperationService  ) { }
  ngOnInit(): void {
    this.id = this.data1.id;
    this.transaction1=this.data1.transaction; 
    let resp=this.service.getRisqueTransaction(this.id);
    resp.subscribe((data)=>this.risqueTransaction=data);
  }
  confirmer ()
  { this.transaction1.statutTransaction="Douteuse Validée" ; 
    let res=this.service1.updatePP(this.id,this.transaction1) ; 
    res.subscribe((data)=>this.message=data);   
    let snackBarRef = this.snackBar.open('operation enregistrée!', 'avec succés', {
      duration: 3000
    });
    this.dialogRef.close();
    this.router.navigate(['/listeTransactions']);
  }
  Close()
  { 
    this.transaction1.statutTransaction="Refusée" ;
    let res=this.service1.updatePP(this.id,this.transaction1) ; 
    res.subscribe((data1)=>this.message=data1); 
     /*let resp1= this.service1.deleteTransaction(this.id);
      resp1.subscribe((data)=> {
        console.log(data);} , 
        error => console.log(error));
     let resp1= this.service1.deleteTransaction(this.id);
      resp1.subscribe((data)=> {
        console.log(data);
        this.dialogRef.close();
      },
      error => console.log(error)); */
    //envoie de l email 
    let resp= this.service1.sendEmail(this.id);
    resp.subscribe((data)=>this.message=data); 
    this.dialogRef.close();
    this.router.navigate(['/listeTransactions']);  }
}