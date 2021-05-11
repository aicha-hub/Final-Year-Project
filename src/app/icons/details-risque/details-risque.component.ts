import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelePersonneMorale } from 'app/client/modelePersonneMorale';
import { ModelePersonneMoraleService } from 'app/service_clients/modele-personne-morale.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-details-risque',
  templateUrl: './details-risque.component.html',
  styleUrls: ['./details-risque.component.css']
})
export class DetailsRisqueComponent implements OnInit {
  modelePersonneMorale:any;
  id:number;
  message:any;

  constructor( private service:ModelePersonneMoraleService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.modelePersonneMorale=new ModelePersonneMorale();
    this.id = this.route.snapshot.params['id'];

    

     this.service.getModele(this.id)
    .subscribe(data => {
        console.log(data)
        this.modelePersonneMorale = data;
      }, error => console.log(error));

    
  }


}
