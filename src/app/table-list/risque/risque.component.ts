import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { modelePersonnePhysique } from 'app/client/modelePersonnePhysique';
import { ModelePersonnePhysiqueService } from 'app/service_clients/modele-personne-physique.service';

@Component({
  selector: 'app-risque',
  templateUrl: './risque.component.html',
  styleUrls: ['./risque.component.css']
})
export class RisqueComponent implements OnInit {

  modelePersonnePhysique:any;
  id:number;
  message:any;
 v:any;
  constructor( private service:ModelePersonnePhysiqueService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.modelePersonnePhysique=new modelePersonnePhysique();
    this.id = this.route.snapshot.params['id'];
  
    

     this.service.getModele(this.id)
    .subscribe(data => {
        console.log(data)
        this.modelePersonnePhysique = data;
      }, error => console.log(error));
  }

  details(code:number)
  {  this.service.getTrouverCompte(code)
    .subscribe(data => {
      
        console.log(data)
        this.v = data;
        this.router.navigate(['/risqueAnalysePP',this.v]);
      }, error => console.log(error));
  }

}
