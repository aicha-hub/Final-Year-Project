import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelePersonneMorale } from 'app/client/modelePersonneMorale';
import { ModelePersonneMoraleService } from 'app/service_clients/modele-personne-morale.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
@Component({
  selector: 'app-traiter-compte',
  templateUrl: './traiter-compte.component.html',
  styleUrls: ['./traiter-compte.component.css']
})
export class TraiterCompteComponent implements OnInit {
  id : number ; 
  modelePersonneMorale:any;
  constructor(private router:Router,private route: ActivatedRoute, private service :ModelePersonneMoraleService,private service1:PersonneMoraleServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let resp= this.service.getModele(this.id);
    resp.subscribe((data)=>this.modelePersonneMorale=data);
  }
  confirmer ()
  {
     this.router.navigate(['/ouvertureCompte',this.id])
  }
  refuser()
  { 
    let resp= this.service1.deletePM(this.id);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    this.router.navigate(['/compte']);}
}













