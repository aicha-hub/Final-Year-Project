import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { personne_physique } from 'app/client/personne_physique';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { ContactService } from 'app/service_clients/contact.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  personnePhysique:any;
  personneMorale:any;
  personne_physique:any;
  personne_morale:any;
  columnsToDisplay : string[] = ['codeClient','numTelephone','nature','formeJuridique','statutPersonne','detailsAction'];
  columnsToDisplay1 : string[] = ['codeClient','numTelephone','nom','prenom','statutPersonne','detailsAction'];
  dataSource : MatTableDataSource<personne_morale>;
  dataSource1 : MatTableDataSource<personne_physique>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator1: MatPaginator;
 @ViewChild(MatSort) sort1: MatSort;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showConseillerBoard=false;
  res=false;
  username: string;
  private roles: string[];
  constructor(private service:PersonneMoraleServiceService , private service1:PersonnePhysiqueService, private router: Router,private tokenStorageService: TokenStorageService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showConseillerBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
      if(this.showConseillerBoard)
      {
    let resp=this.service.getDossiersRisqueFaible();
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
    let resp1=this.service1.getDossiersRisqueFaible();
    resp1.subscribe((data)=>this.personnePhysique=data);
      }
      if(this.showAdminBoard){
        let resp=this.service.getPMS();
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
        let resp1=this.service1.getPPS();
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
      if(this.showModeratorBoard){
        let resp=this.service.getDossiersRisqueMEMF();
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
        let resp1=this.service1.getDossiersRisqueMEMF();
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
    }
   }
  
  

 
  traiterClientMoral(id :number)
  {
     this.router.navigate(['/traiterCompteClientMoral',id])
  }
  traiterClientPhysique(id :number)
  {
     this.router.navigate(['/traiterCompteClientPhysique',id])
  }

}
