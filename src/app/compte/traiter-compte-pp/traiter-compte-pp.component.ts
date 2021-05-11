import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelePersonnePhysiqueService } from 'app/service_clients/modele-personne-physique.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
@Component({
  selector: 'app-traiter-compte-pp',
  templateUrl: './traiter-compte-pp.component.html',
  styleUrls: ['./traiter-compte-pp.component.css']
})
export class TraiterComptePPComponent implements OnInit {
  id : number ; 
  modelePersonnePhysique:any;
  constructor(private router:Router,private route: ActivatedRoute, private service :ModelePersonnePhysiqueService,private service1:PersonnePhysiqueService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp= this.service.getModele(this.id);
    resp.subscribe((data)=>this.modelePersonnePhysique=data);
  }
  confirmer ()
  {
     this.router.navigate(['/ouvertureCompte',this.id])
  }
  refuser()
  { 
    let resp= this.service1.deletePP(this.id);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    this.router.navigate(['/compte']);}
}





