import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelePersonneMorale } from 'app/client/modelePersonneMorale';
import { ModelePersonneMoraleService } from 'app/service_clients/modele-personne-morale.service';
import { ModelePersonnePhysiqueService } from 'app/service_clients/modele-personne-physique.service';
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
  v:any;
  constructor( private service:ModelePersonneMoraleService,private serviceOne:ModelePersonnePhysiqueService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.modelePersonneMorale=new ModelePersonneMorale();
    this.id = this.route.snapshot.params['id'];

    

     this.service.getModele(this.id)
    .subscribe(data => {
        console.log(data)
        this.modelePersonneMorale = data;
      }, error => console.log(error));

    
  }
  details(code:number)
  {  this.serviceOne.getTrouverCompte(code)
    .subscribe(data => {
      
        console.log(data)
        this.v = data;
        this.router.navigate(['/risqueAnalysePP',this.v]);
      }, error => console.log(error));
  }


}
