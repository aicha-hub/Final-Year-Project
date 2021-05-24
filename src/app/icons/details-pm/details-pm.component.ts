import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { liste_nat } from 'app/client/list_nat';
import { personne_morale } from 'app/client/personne_morale';
import { representant_legal } from 'app/client/representant_legal';
import { BeneficiaireEffectifServiceService } from 'app/service_clients/beneficiaire-effectif-service.service';
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
  beneficiaireEffectif:any;
  beneficiaireEffectif4:any;
  beneficiaireEffectif2:any;
  beneficiaireEffectif3:any;
  liste_nationnalite=liste_nat;
  representant_legal1: representant_legal= new representant_legal();
  message : any; 
  constructor(private service2:BeneficiaireEffectifServiceService ,private service1: RepresentantLegalService ,private service:PersonneMoraleServiceService,private router: Router,private route: ActivatedRoute) { }
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
      let resp=this.service2.getBeneficiaire(this.id);
      resp.subscribe((data2)=>this.beneficiaireEffectif=data2);
      let resp1=this.service2.getBeneficiaire1(this.id);
      resp1.subscribe((data3)=>this.beneficiaireEffectif2=data3);
      let resp2=this.service2.getBeneficiaire2(this.id);
      resp2.subscribe((data3)=>this.beneficiaireEffectif3=data3);
      let resp3=this.service2.getBeneficiaire3(this.id);
      resp3.subscribe((data3)=>this.beneficiaireEffectif4=data3);
  }
  modifier ()
  {
   this.router.navigate(['/modifier', this.id]) ;
  }
}