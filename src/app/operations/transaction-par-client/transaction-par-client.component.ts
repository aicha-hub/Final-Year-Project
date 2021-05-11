import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../service/operation.service';
import { transaction } from '../transaction';

@Component({
  selector: 'app-transaction-par-client',
  templateUrl: './transaction-par-client.component.html',
  styleUrls: ['./transaction-par-client.component.css']
})
export class TransactionParClientComponent implements OnInit {
  id:number;
  transaction1:transaction=new transaction();
  transaction:any;

  constructor(private router: Router,private route: ActivatedRoute, private service : OperationService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    let resp=this.service.getTransactionClient(this.id);
    resp.subscribe((data)=>this.transaction=data);
    

  }

  details(code:number)
  {
    this.router.navigate(['/detailsTransaction',code]);
  }
 
}
