import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChoixComponent } from 'app/ajouter/choix/choix.component';
import { personne_morale } from 'app/client/personne_morale';
import { personne_physique } from 'app/client/personne_physique';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { DetailsFatcaPPComponent } from '../details-fatca-pp/details-fatca-pp.component';
import { DetailsFatcaComponent } from '../details-fatca/details-fatca.component';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  personne_physique:any;
  personne_morale:any;
  columnsToDisplay : string[] = ['codeClient','nature','formeJuridique','denominationSociale','numTelephone','paysResidence','detailsAction'];
  columnsToDisplay1 : string[] = ['codeClient','nom','prenom','profession','numTelephone','paysResidence','detailsAction'];
  dataSource : MatTableDataSource<personne_morale>;
  dataSource1 : MatTableDataSource<personne_physique>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator1: MatPaginator;
 @ViewChild(MatSort) sort1: MatSort;
 message:any;
  constructor(private dialog:MatDialog,private dialoge:MatDialog,private service:PersonneMoraleServiceService, private service1:PersonnePhysiqueService  ,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getPMFatca();
    resp.subscribe(
      response => {
       this.personne_morale = response;
        console.log(response);
        this.dataSource = new MatTableDataSource(this.personne_morale); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      });
    let resp1=this.service1.getPPFatca();
    resp1.subscribe(
      response1 => {
       this.personne_physique= response1;
        console.log(response1);
        this.dataSource1 = new MatTableDataSource(this.personne_physique); 
        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
      },
      error => {
        console.log(error);
      });
    
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilterone(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  details(personne_morale:personne_morale){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.width = "60%";
    dialogConfig.height = "73%";
    dialogConfig.data = {personne_morale};
    this.dialoge.open(DetailsFatcaComponent,dialogConfig);
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }

   risquePP(id:number)
   {
     this.router.navigate(['/risqueClientPhysique', id])
   }
     
   detailsPP(personne_physique:personne_physique){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.width = "60%";
    dialogConfig.height = "73%";
    dialogConfig.data = {personne_physique};
    this.dialog.open(DetailsFatcaPPComponent,dialogConfig);
   
  }
}


