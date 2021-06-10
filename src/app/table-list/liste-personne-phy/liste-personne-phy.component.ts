import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-liste-personne-phy',
  templateUrl: './liste-personne-phy.component.html',
  styleUrls: ['./liste-personne-phy.component.css']
})
export class ListePersonnePhyComponent implements OnInit {
  columnsToDisplay : string[] = ['codeClient','nom','prenom','statutPersonne','niveauRisque','detailsAction','deleteAction'];
  personne_physique:any;
  code:Number;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showConseillerBoard=false;
  showChefBoard=false;
  res=false;
  username: string;
  dataSource : MatTableDataSource<personne_physique>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private service:PersonnePhysiqueService,private router: Router, private dialog:MatDialog,private tokenStorageService: TokenStorageService) { }

 
  

  ngOnInit(): void {
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
    let resp=this.service.getPPS();
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
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  chercher(id : number )
  {
   this.router.navigate(['/clientPhysique' , id])

  } 

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

  public findId(){
    let resp= this.service.getPP(this.personne_physique.Code_clt);
    resp.subscribe((data)=>this.personne_physique=data);
   }

   risque(id:number)
   {
     this.router.navigate(['/risqueClientPhysique', id])
   }
     
   details(id: number){
    this.router.navigate(['/details', id])
  }
  
  AjoutPP(id: number)
  {this.router.navigate(['/Personne/CreatePersonnePhysique'])}
  
  public deletePP(id:number){
    let resp= this.service.deletePP(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));}
    
  }

  
   

