import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { RepresentantLegalService } from 'app/service_clients/representant-legal.service';

@Component({
  selector: 'app-details-pm',
  templateUrl: './details-pm.component.html',
  styleUrls: ['./details-pm.component.css']
})
export class DetailsPMComponent implements OnInit {
  personne_morale:any;
  id:number;
  representant_legal:any;

  constructor(private service1: RepresentantLegalService ,private service:PersonneMoraleServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.personne_morale=new personne_morale();
    
    this.service.getPM(this.id).subscribe(data => {
        console.log(data)
        this.personne_morale = data;
      }, error => console.log(error));


      this.service1.getRepresentant(this.id).subscribe(data1 => {
        console.log(data1)
        this.representant_legal = data1;
      }, error => console.log(error));
  }
  
 
}
