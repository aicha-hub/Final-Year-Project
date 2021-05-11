import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OperationService } from '../service/operation.service';
import { TraiterOperationComponent } from '../traiter-operation/traiter-operation.component';
import { transaction } from '../transaction';

@Component({
  selector: 'app-operations-douteuses',
  templateUrl: './operations-douteuses.component.html',
  styleUrls: ['./operations-douteuses.component.css']
})
export class OperationsDouteusesComponent implements OnInit {
  transaction:any;
  constructor(private service:OperationService, private router:Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.reloadData();}
  reloadData() {
    let resp=this.service.GetTransactionDouteuses();
    resp.subscribe((data)=>this.transaction=data);
  }
  details(id:number, transaction : transaction) {  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data = { id ,transaction };
    dialogConfig.width = "50%";
    this.dialog.open(TraiterOperationComponent,dialogConfig);
   } 

   chercher(rib:number)
  {
    
      this.router.navigate(['/detailsDouteuseTransaction', rib])
    
  }
}