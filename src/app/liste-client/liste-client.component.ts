import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { contact } from 'app/client/contact';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { ContactService } from 'app/service_clients/contact.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  contact:any;
  code:Number;
  totalRecords:Number=100;
  columnsToDisplay : string[] = ['codeClient','numTelephone','statutPersonne','paysResidence','niveauRisque','addAction','deleteAction'];
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
           this.dataSource = new MatTableDataSource(this.contact); 
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
    
    clientsMorales()
   {
     this.router.navigate(['/clientsMorales'])
   }
     
   clientsPhysiques(){
    this.router.navigate(['/clientsPhysiques'])
  }

    public deletePP(id:number){
      let resp= this.service.deleteContact(id);
      resp.subscribe((data)=> {
        console.log(data);
        this.fetchPosts();
      },
      error => console.log(error));}

     public addPP(id :number)
  {
    this.router.navigate(['/ouvertureCompte',id])
  }
}
