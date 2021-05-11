import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'app/operations/service/operation.service';

@Component({
  selector: 'app-risque-analyse-pp',
  templateUrl: './risque-analyse-pp.component.html',
  styleUrls: ['./risque-analyse-pp.component.css']
})
export class RisqueAnalysePPComponent implements OnInit {
  id:number;

  transaction:any;
  transaction1: any;
  transaction2: any;
  transaction3: any;
  constructor(private service:OperationService, private router:Router, private dialog: MatDialog,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
  
    this.reloadData();}
  reloadData() {
    let resp=this.service.getTransactionClientDouteuse(this.id);
    resp.subscribe((data)=>this.transaction=data);
    let resp1=this.service.getTransactionClientDouteuseValidee(this.id);
    resp1.subscribe((data)=>this.transaction1=data);
    let resp2=this.service.getTransactionClientValidee(this.id);
    resp2.subscribe((data)=>this.transaction2=data);
    let resp3=this.service.getTransactionClientRefuse(this.id);
    resp3.subscribe((data)=>this.transaction3=data);
  }

  

}
