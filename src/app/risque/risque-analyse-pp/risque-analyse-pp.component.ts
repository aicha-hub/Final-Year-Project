import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'app/operations/service/operation.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-risque-analyse-pp',
  templateUrl: './risque-analyse-pp.component.html',
  styleUrls: ['./risque-analyse-pp.component.css']
})
export class RisqueAnalysePPComponent implements OnInit {
  id:number;
  categoriesList: any[] = [];
  transaction:any;
  transaction1: any;
  transaction2: any;
  transaction3: any;
  done:boolean;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'typeTransaction';
  yAxisLabel: string = 'nombre des transactions';
  timeline: boolean = true;
  legend: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };





  constructor(private service:OperationService, private router:Router, private dialog: MatDialog,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.displayAllCategories()
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

  displayAllCategories(){
    this.service.getTransactionClt(this.id).subscribe(
      (categories : any[] )=>{
        categories.forEach((element:any) => {
          this.categoriesList.push({ "name": element.name, "value": element.valeur});  // can take only x y values
        });      
        this.done = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
