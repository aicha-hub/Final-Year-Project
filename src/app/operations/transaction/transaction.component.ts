import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { contact } from 'app/client/contact';
import { OperationsComponent } from '../operations.component';
import { OperationService } from '../service/operation.service';
import { transaction } from '../transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any;
  test1:string="test";
  test:string;
  columnsToDisplay : string[] = ['codeTransaction','ribEmetteur','typeTransaction','montant','dateTransaction','statutTransaction','detailsAction'];
  dataSource : MatTableDataSource<transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service:OperationService, private router:Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getTransaction();
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

  

    
  

  chercher(rib:number)
  {
    
      this.router.navigate(['/transactionsClient', rib])
    
  }

  details(code:number)
  {
    this.router.navigate(['/detailsTransaction',code]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
