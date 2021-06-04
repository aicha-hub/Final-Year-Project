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
  categoriesList1: any[] = [];
  transaction:any;
  transaction1: any;
  transaction2: any;
  transaction3: any;
  done:boolean;
  done1:boolean;
  done2:boolean;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showGridLines: boolean = true; // grid lines
  showDataLabel: boolean = true; // numbers on bars
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  legendPosition:String='below';
  legendPosition1:String='below';
  xAxisLabel: string = 'Type Transaction';
  xAxisLabel1: string = 'Mois';
  yAxisLabel: string = 'Nombre des Transactions';
  timeline: boolean = true;
  roundEdges: boolean = false;
  tooltipDisabled: boolean = false;
  legend: boolean = true;
  barPadding :number=30;
  maxLabelLength:string="20";
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  // options
  
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;



  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
   // options

   showLabels: boolean = true;

  
  

   onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

 
  constructor(private service:OperationService, private router:Router, private dialog: MatDialog,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 this.displayAllCategories1();
    this.displayAllCategories()
    this.displayAllCategories2();
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
        console.log(this.categoriesList1);
        console.log(this.categoriesList1.length);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  multi: any[] = [
    {
      name: 'Transaction effectueé par mois',
      series: [
        
      ]
    },
   
  
  ];
  displayAllCategories1(){
    this.service.getAnalyse(this.id).subscribe(
      (categories1 : any[] )=>{
        categories1.forEach((element1:any) => {
          this.categoriesList1.push({ "name": element1.name, "value": element1.valeur});      
         
         console.log(this.multi)
          // can take only x y values
        });      

   
        this.done1 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
 
 
  displayAllCategories2(){
    this.service.getAnalyseDate(this.id).subscribe(
      (categories1 : any[] )=>{
        categories1.forEach((element1:any) => {
               
         this.multi[0].series = [...this.multi[0].series, ...[{ "name": element1.name, "value": element1.valeur}]];
         console.log(this.multi)
          // can take only x y values
        });      

   
        this.done2 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
