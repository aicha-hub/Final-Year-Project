import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteCourantService } from 'app/service_clients/compte-courant.service';
import { CompteEpargneService } from 'app/service_clients/compte-epargne.service';
import { compteCourant } from '../compteCourant';
import { compteEpargne } from '../compteEpargne';

@Component({
  selector: 'app-ouverture-compte',
  templateUrl: './ouverture-compte.component.html',
  styleUrls: ['./ouverture-compte.component.css']
})
export class OuvertureCompteComponent implements OnInit {
  id:number;
  compteCourant:compteCourant=new compteCourant();
  message:any;
  x:number;
  compteEpargne:compteEpargne=new compteEpargne();
  constructor(private router: Router,private route: ActivatedRoute, private service: CompteCourantService, private service1:CompteEpargneService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.x=+this.id;
  }
  
  
   
  

  CreateNow(operation:string,client:string){

    if(operation=="courant")
    { if(client=="moral")
       { this.compteCourant.contactCompte=this.x;
      let resp= this.service.CreatePM(this.compteCourant, this.id);
        resp.subscribe((data)=>this.message=data);
       }
      if(client=="physique")
      { this.compteCourant.contactCompte=this.x;
        let resp1= this.service.CreatePP(this.compteCourant, this.id);
        resp1.subscribe((data)=>this.message=data);
      }

  }
  if(operation=="epargne")
    { if(client=="moral")
       { this.compteEpargne.contactCompte=this.x;
      let resp= this.service1.CreatePM(this.compteEpargne, this.id);
        resp.subscribe((data)=>this.message=data);
       }
      if(client=="physique")
      { this.compteEpargne.contactCompte=this.x;
        let resp1= this.service1.CreatePP(this.compteEpargne, this.id);
        resp1.subscribe((data)=>this.message=data);
      }
      
  }
    
  this.router.navigate(['listeClient']);  
  }


}
