import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/operations/service/operation.service';
import { ContactService } from 'app/service_clients/contact.service';

@Component({
  selector: 'app-tableaux-bords',
  templateUrl: './tableaux-bords.component.html',
  styleUrls: ['./tableaux-bords.component.css']
})
export class TableauxBordsComponent implements OnInit {
  done:boolean;
  categoriesList: any[] = [];
  categoriesList1: any[] = [];
  categoriesList2: any[] = [];
  categoriesList3: any[] = [];
  categoriesList4: any[] = [];
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Statut Transaction';
  yAxisLabel: string = 'nombre des transactions';
  timeline: boolean = true;
  legend: boolean = true;
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
  constructor(private service:ContactService,private serviceone :OperationService) { }

  ngOnInit(): void {
    this.displayAllCategories();
    this.displayAllCategories1();
    this.displayAllCategories2();
    this.displayAllCategories3();
    this.displayAllCategories4();
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
          this.categoriesList4.push({ "name": element4.name, "value": element4.valeur});  // can take only x y values
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
}
