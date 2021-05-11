import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service:PersonnePhysiqueService,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getRisqueEleve();
    resp.subscribe((data)=>this.personne_physique=data);
    let resp1=this.service.getRisqueMoyennementEleve();
    resp1.subscribe((data)=>this.personne_physique1=data);
    let resp2=this.service.getRisqueFaiblementEleve();
    resp2.subscribe((data)=>this.personne_physique2=data);
    let resp3=this.service.getRisqueFaible();
    resp3.subscribe((data)=>this.personne_physique3=data);
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

 
}
