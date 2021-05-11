import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OperationService } from '../service/operation.service';
import { transaction } from '../transaction';

@Component({
  selector: 'app-transactions-douteuses-details',
  templateUrl: './transactions-douteuses-details.component.html',
  styleUrls: ['./transactions-douteuses-details.component.css']
})
export class TransactionsDouteusesDetailsComponent implements OnInit {
  id:number;
  transaction1:transaction=new transaction();
  transaction:any;
  constructor(private router: Router,private route: ActivatedRoute, private service : OperationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    let resp=this.service.getTransactionClientDouteuse(this.id);
    resp.subscribe((data)=>this.transaction=data);
  }

}
