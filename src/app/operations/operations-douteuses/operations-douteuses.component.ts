import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  columnsToDisplay : string[] = ['codeTransaction','ribEmetteur','typeTransaction','montant','dateTransaction','statutTransaction','detailsAction'];
  dataSource : MatTableDataSource<transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service:OperationService, private router:Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.reloadData();}
  reloadData() {
    let resp=this.service.GetTransactionDouteuses();
    resp.subscribe(
      response => {
        this.transaction = response;
        console.log(response);
        this.dataSource = new MatTableDataSource(this.transaction); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      });
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}