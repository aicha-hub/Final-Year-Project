import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-risque-personne-morale',
  templateUrl: './risque-personne-morale.component.html',
  styleUrls: ['./risque-personne-morale.component.css']
})
export class RisquePersonneMoraleComponent implements OnInit {

  personne_morale:any;
  personne_morale1:any;
  personne_morale2:any;
  personne_morale3:any;

  constructor(private service:PersonneMoraleServiceService,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getRisqueEleve();
    resp.subscribe((data)=>this.personne_morale=data);
    let resp1=this.service.getRisqueMoyennementEleve();
    resp1.subscribe((data)=>this.personne_morale1=data);
    let resp2=this.service.getRisqueFaiblementEleve();
    resp2.subscribe((data)=>this.personne_morale2=data);
    let resp3=this.service.getRisqueFaible();
    resp3.subscribe((data)=>this.personne_morale3=data);
  }

  details(id: number){
    this.router.navigate(['/detailsClientMorale', id])
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }

  clientsPhysiques(id: number){
    this.router.navigate(['/risqueClientPhysique'])
  }

}


