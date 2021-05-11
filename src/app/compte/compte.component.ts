import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    resp.subscribe((data)=>this.personneMorale=data);
    let resp1=this.service1.getDossiersRisqueFaible();
    resp1.subscribe((data)=>this.personnePhysique=data);
      }
      if(this.showAdminBoard){
        let resp=this.service.getPMS();
        resp.subscribe((data)=>this.personneMorale=data);
        let resp1=this.service1.getPPS();
        resp1.subscribe((data)=>this.personnePhysique=data);
      }
      if(this.showModeratorBoard){
        let resp=this.service.getDossiersRisqueMEMF();
        resp.subscribe((data)=>this.personneMorale=data);
        let resp1=this.service1.getDossiersRisqueMEMF();
        resp1.subscribe((data)=>this.personnePhysique=data);
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
