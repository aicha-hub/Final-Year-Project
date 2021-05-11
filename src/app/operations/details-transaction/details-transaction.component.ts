import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../service/operation.service';

@Component({
  selector: 'app-details-transaction',
  templateUrl: './details-transaction.component.html',
  styleUrls: ['./details-transaction.component.css']
})
export class DetailsTransactionComponent implements OnInit {

  id:number;
  transaction:any;

  constructor(private router: Router,private route: ActivatedRoute, private service : OperationService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    let resp=this.service.getPP(this.id);
    resp.subscribe((data)=>this.transaction=data);

  }

  retour(id:number)
  {
    this.router.navigate(['/transactionsClient',id])
  }

}
