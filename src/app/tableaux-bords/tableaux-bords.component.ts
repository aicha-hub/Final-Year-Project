import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/operations/service/operation.service';
import { ContactService } from 'app/service_clients/contact.service';
import { element } from 'protractor';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-tableaux-bords',
  templateUrl: './tableaux-bords.component.html',
  styleUrls: ['./tableaux-bords.component.css']
})
export class TableauxBordsComponent implements OnInit {
  done:boolean;
  nbre:number;
  nbre2:number;
  nbre3:number;
  categoriesList: any[] = [];
  categoriesList1: any[] = [];
  categoriesList2: any[] = [];
  categoriesList3: any[] = [];
  categoriesList4: any[] = [];
  categoriesList5: any[] = [];
  categoriesList6: any[] = [];
  categoriesList7: any[] = [];
  animations: boolean = true;
  legendPosition:String='below';
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Statut Transaction';
  yAxisLabel: string = 'nombre des transactions';
  timeline: boolean = true;
  legend: boolean = true;
  schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  roundEdges: boolean = false;
  tooltipDisabled: boolean = false;
  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;
 
  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

 // options
 legendTitle: string = 'Products';
 legendTitleMulti: string = '';

 gradient: boolean = false;
 showLegend: boolean = true;
  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  activeEntries: any[] = ['book']
  barPadding: number = 15

  yScaleMax: number = 9000;

  colorScheme = {
    domain: ['#5AA454', '#7aa3e5','#E44D25', '#CFC0BB',  '#a8385d', '#aae3f5']
  };
  colorScheme1 = {
    domain1: ['#a8385d', '#aae3f5','#5AA454', '#7aa3e5','#E44D25', '#CFC0BB',  '#a8385d', '#aae3f5']
  };
  done1: boolean;
  done2: boolean;
  done3: boolean;
  done4: boolean;
  nbre11: number;
  done5: boolean;
  done6: boolean;
  done7: boolean;
  done8: boolean;
  done9: boolean;
  done10: boolean;
  done11: boolean;
  done44: boolean;
  done99: boolean;
  constructor(private service:ContactService,private serviceone :OperationService) { }

  ngOnInit(): void {
    this.displayAllCategories();
    this.displayAllCategories1();
    this.displayAllCategories2();
    this.displayAllCategories3();
    this.displayAllCategories4();
    this.displayAllCategories5();
    this.displayAllCategories6();
    this.service.getTotal().subscribe(
      (nbre1:number )=>{
        this.nbre=nbre1;
        console.log(nbre1);
      }
    )
    this.service.getCaisse().subscribe(
      (nbre5:number )=>{
        this.nbre2=nbre5;
     
      }
    )
    this.service.getTotalCMP().subscribe(
      (nbre8:number )=>{
        this.nbre3=nbre8;
      
      }
    )

    this.serviceone.getNbre().subscribe(
      (nbre9:number )=>{
        this.nbre11=nbre9;
        
      }
    )
  }


  displayAllCategories(){
    this.service.getContactS().subscribe(
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
    this.service.getFatca().subscribe(
      (categories : any[] )=>{
        categories.forEach((element:any) => {
          this.categoriesList6.push({ "name": element.name, "value": element.valeur});  // can take only x y values
        });      
        this.done44 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
    this.serviceone.getcmp().subscribe(
      (categories99 : any[] )=>{
        categories99.forEach((element:any) => {
          this.categoriesList7.push({ "name": element.name, "value": element.valeur});  // can take only x y values
        });      
        this.done99 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  displayAllCategories1(){
    this.serviceone.GetTransactionD().subscribe(
      (categories1 : any[] )=>{
        categories1.forEach((element1:any) => {
          this.categoriesList1.push({ "name": element1.name, "value": element1.valeur});  // can take only x y values
        });      
        this.done1 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }


  displayAllCategories2(){
    this.serviceone.getType().subscribe(
      (categories2 : any[] )=>{
        categories2.forEach((element2:any) => {
          this.categoriesList2.push({ "name": element2.name, "value": element2.valeur});  // can take only x y values
        });      
        this.done2 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  displayAllCategories3(){
    this.serviceone.getDN().subscribe(
      (categories3 : any[] )=>{
        categories3.forEach((element3:any) => {
          this.categoriesList3.push({ "name": element3.name, "value": element3.valeur});  // can take only x y values
        });      
        this.done3 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  displayAllCategories4(){
    this.service.getContactPM().subscribe(
      (categories4 : any[] )=>{
        categories4.forEach((element4:any) => {
          this.categoriesList4.push({ "name": element4.name, "value": element4.valeur}); 
         
          // can take only x y values
        });      
        this.done4 = true;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }
  multi: any[] = [
    {
      name: 'Janvier',
      series: [
        
      ],
    },
    {
      name: 'Féverier',
      series: [
        
      ],
    },
    {
      name: 'Mars',
      series: [
        
      ],
    },
    {
      name: 'Avril',
      series: [
        
      ],
    },{
      name: 'Mai',
      series: [
        
      ],
    },{
      name: 'Juin',
      series: [
        
      ],
    },{
      name: 'juillet',
      series: [
        
      ],
    },
   
   
  
  ];
  displayAllCategories5(){
    this.serviceone.getJanvier().subscribe(
      (categories5 : any[] )=>{
        categories5.forEach((element5:any) => {
          this.multi[0].series = [...this.multi[0].series, ...[{ "name": element5.name, "value": element5.valeur}]];
          this.multi[1].series = [...this.multi[1].series, ...[{ "name": element5.name, "value": element5.valeur}]];
        });      
        this.done5 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    )
    this.serviceone.getFeverier().subscribe(
      (categories7 : any[] )=>{
        categories7.forEach((element7:any) => {
      
          this.multi[1].series = [...this.multi[1].series, ...[{ "name": element7.name, "value": element7.valeur}]];
        });      
        this.done7 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    
    )
    this.serviceone.getMars().subscribe(
      (categories8 : any[] )=>{
        categories8.forEach((element8:any) => {
      
          this.multi[2].series = [...this.multi[2].series, ...[{ "name": element8.name, "value": element8.valeur}]];
        });      
        this.done8 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }   
    )
    this.serviceone.getAvril().subscribe(
      (categories9 : any[] )=>{
        categories9.forEach((element9:any) => {
      
          this.multi[3].series = [...this.multi[3].series, ...[{ "name": element9.name, "value": element9.valeur}]];
        });      
        this.done9 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    
    )
  }
  displayAllCategories6(){
    this.serviceone.getMai().subscribe(
      (categories10 : any[] )=>{
        categories10.forEach((element10:any) => {
          this.multi[4].series = [...this.multi[4].series, ...[{ "name": element10.name, "value": element10.valeur}]];
        });      
        this.done10 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    )
  
    this.serviceone.getJuin().subscribe(
      (categories6 : any[] )=>{
        categories6.forEach((element6:any) => {
          this.multi[5].series = [...this.multi[5].series, ...[{ "name": element6.name, "value": element6.valeur}]];
        });      
        this.done6 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    )
    this.serviceone.getjuillet().subscribe(
      (categories11 : any[] )=>{
        categories11.forEach((element11:any) => {
          this.multi[6].series = [...this.multi[6].series, ...[{ "name": element11.name, "value": element11.valeur}]];
        });      
        this.done11 = true;
        console.log(this.multi);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
