import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsComponent } from '../operations.component';
import { OperationService } from '../service/operation.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any;
  test1:string="test";
  test:string;
  
  constructor(private service:OperationService, private router:Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getTransaction();
    resp.subscribe((data)=>this.transaction=data);

  

    
  }

  chercher(rib:number)
  {
    
      this.router.navigate(['/transactionsClient', rib])
    
  }

  details(code:number)
  {
    this.router.navigate(['/detailsTransaction',code]);
  }

}
