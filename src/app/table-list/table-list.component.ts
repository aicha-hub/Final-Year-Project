import { Pipe } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { contact } from 'app/client/contact';
import { personne_physique } from 'app/client/personne_physique';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { ContactService } from 'app/service_clients/contact.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { data } from 'jquery';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  contact:any;
  code:Number;
  totalRecords:Number=100;
  columnsToDisplay : string[] = ['codeClient'];
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableBoard = false;
  showConseillerBoard=false;
  showChefBoard=false;
  res=false;
  username: string;
  dataSource : MatTableDataSource<contact>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor( private service:ContactService,private router: Router, private dialog:MatDialog,private tokenStorageService: TokenStorageService) { }

  
  

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showResponsableBoard = this.roles.includes('ROLE_RESPONSABLE');
     this.showConseillerBoard = this.roles.includes('CONSEILLER_CLIENT');
      this.showChefBoard = this.roles.includes('CHEF_AGENCE');
      
      this.username = user.username;
      console.log(this.res);
    }

   
      this.fetchPosts();
  }
  
  fetchPosts(): void {
   /*let resp=this.service.getContact();
    resp.subscribe(
      response => {
        this.POSTS = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });*/
      let resp=this.service.getContact();
      resp.subscribe(
        response => {
          this.contact = response;
          console.log(response);
          this.dataSource = new MatTableDataSource(response); 
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log(error);
        });
    }

  /*public findId(){
    let resp= this.service.getPP(this.personne_physique.Code_clt);
    resp.subscribe((data)=>this.personne_physique=data);
   }
*/


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
  
  
  
  public deletePP(id:number){
    let resp= this.service.deleteContact(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.fetchPosts();
    },
    error => console.log(error));}
    
  }
   

