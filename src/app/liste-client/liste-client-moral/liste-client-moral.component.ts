import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { personne_physique } from 'app/client/personne_physique';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-liste-client-moral',
  templateUrl: './liste-client-moral.component.html',
  styleUrls: ['./liste-client-moral.component.css']
})
export class ListeClientMoralComponent implements OnInit {
 
  columnsToDisplay : string[] = ['codeClient','numTelephone','nature','formeJuridique','denominationSociale','niveauRisque','detailsAction','deleteAction'];
  personne_physique:any;
 personne_morale:any;
 message:any;
 private roles: string[];
 isLoggedIn = false;
 showAdminBoard = false;
 showModeratorBoard = false;
 showConseillerBoard=false;
 showChefBoard=false;
 res=false;
 username: string;
 dataSource : MatTableDataSource<personne_morale>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 
  constructor(private service:PersonneMoraleServiceService,private router: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showConseillerBoard = this.roles.includes('ROLE_USER');
      this.showChefBoard=this.roles.includes('ROLE_CHEF');
      if( this.showAdminBoard || this.showConseillerBoard || this.showChefBoard ){this.res=true}
      this.username = user.username;
      console.log(this.res);}
    this.reloadData();}
  
  reloadData() {
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
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  details(id: number){
    this.router.navigate(['/detailsClientMorale', id])
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }

  chercher(id : number )
  {
   this.router.navigate(['/clientMoral' , id])

  }  
  
  public deletePP(id:number){
    let resp= this.service.deletePM(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));}

    clientsMorales()
   {
     this.router.navigate(['/clientsMorales'])
   }
     
   clientsPhysiques(){
    this.router.navigate(['/clientsPhysiques'])
  }

  AjoutclientMorale()
   {
     this.router.navigate(['/clientMoral'])
   }
     
   AjoutclientPhysique(){
    this.router.navigate(['/clientPhysique'])
  }
}




