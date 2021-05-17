import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { ContactService } from 'app/service_clients/contact.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-affichage-risque',
  templateUrl: './affichage-risque.component.html',
  styleUrls: ['./affichage-risque.component.css']
})
export class AffichageRisqueComponent implements OnInit {
  personne_physique:any;
  personne_physique1:any;
  personne_physique2:any;
  personne_physique3:any;

  columnsToDisplay : string[] = ['codeClient','numTelephone','statutPersonne','paysResidence','niveauRisque','detailsAction','risqueAction'];
  columnsToDisplay1 : string[] =['codeClient','numTelephone','statutPersonne','paysResidence','niveauRisque','detailsAction','risqueAction'];
  dataSource : MatTableDataSource<personne_physique>;
  dataSource1 : MatTableDataSource<personne_physique>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator1: MatPaginator;
 @ViewChild(MatSort) sort1: MatSort;
 columnsToDisplay2 : string[] = ['codeClient','numTelephone','statutPersonne','paysResidence','niveauRisque','detailsAction','risqueAction'];
  columnsToDisplay3 : string[] =['codeClient','numTelephone','statutPersonne','paysResidence','niveauRisque','detailsAction','risqueAction'];
  dataSource2 : MatTableDataSource<personne_physique>;
  dataSource3 : MatTableDataSource<personne_physique>;
 @ViewChild(MatPaginator) paginator2: MatPaginator;
 @ViewChild(MatSort) sort2: MatSort;
 @ViewChild(MatPaginator) paginator3: MatPaginator;
 @ViewChild(MatSort) sort3: MatSort;

  constructor(private service:PersonnePhysiqueService,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getRisqueEleve();
    resp.subscribe(
      response => {
       this.personne_physique = response;
        console.log(response);
        this.dataSource = new MatTableDataSource(this.personne_physique); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      });
    let resp1=this.service.getRisqueMoyennementEleve();
    resp1.subscribe(
      response1 => {
       this.personne_physique1= response1;
        console.log(response1);
        this.dataSource1 = new MatTableDataSource(this.personne_physique1); 
        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
      },
      error => {
        console.log(error);
      });
    let resp2=this.service.getRisqueFaiblementEleve();
    resp2.subscribe(
      response2 => {
       this.personne_physique2= response2;
        console.log(response2);
        this.dataSource2 = new MatTableDataSource(this.personne_physique2); 
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
      },
      error => {
        console.log(error);
      });
    let resp3=this.service.getRisqueFaible();
    resp3.subscribe(
      response3 => {
       this.personne_physique3= response3;
        console.log(response3);
        this.dataSource3 = new MatTableDataSource(this.personne_physique3); 
        this.dataSource3.paginator = this.paginator3;
        this.dataSource3.sort = this.sort3;
      },
      error => {
        console.log(error);
      });
  }

  risque(id:number)
  {
    this.router.navigate(['/risqueClientPhysique', id])
  }
    
  details(id: number){
   this.router.navigate(['/details', id])
 }

 clientsMorales(id: number){
  this.router.navigate(['/risqueClientMorale'])
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  this.dataSource1.filter = filterValue.trim().toLowerCase();
  this.dataSource2.filter = filterValue.trim().toLowerCase();
  this.dataSource3.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  if (this.dataSource1.paginator) {
    this.dataSource1.paginator.firstPage();
  }
  if (this.dataSource2.paginator) {
    this.dataSource2.paginator.firstPage();
  }
  if (this.dataSource3.paginator) {
    this.dataSource3.paginator.firstPage();
  }
}

applyFilterone(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource1.filter = filterValue.trim().toLowerCase();

  if (this.dataSource1.paginator) {
    this.dataSource1.paginator.firstPage();
  }
}
 
}
