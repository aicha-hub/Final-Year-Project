import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
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
    resp.subscribe((data)=>this.personne_morale=data);
    
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
     this.router.navigate(['/typography'])
   }
     
   AjoutclientPhysique(){
    this.router.navigate(['/user-profile'])
  }
}
