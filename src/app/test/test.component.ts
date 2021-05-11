import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PepServiceService } from 'app/pep/service_pep/pep-service.service';
import { NationaliteServiceService } from 'app/service_clients/nationalite-service.service';
import { PersNatService } from 'app/service_clients/pers-nat.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { RevenuService } from 'app/service_clients/revenu.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  personne_physique:any;
  revenu :any;
  pep:any;
  id:number;
  pers_nat:any;

  constructor(private service :PersonnePhysiqueService, private service1:RevenuService,private service4:NationaliteServiceService,private service2:PepServiceService ,private service3:PersNatService ,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
   
   this.service.getPP(this.id)
    .subscribe(data => {
        console.log(data)
        this.personne_physique = data;
      }, error => console.log(error));

      this.service1.getR(this.id)
      .subscribe(data => {
          console.log(data)
          this.revenu= data;
        }, error => console.log(error));

        this.service3.getPPS()
        .subscribe(data => {
            console.log(data)
            this.pers_nat= data;
          }, error => console.log(error));
      
        this.service2.getPR(this.id)
        .subscribe(data => {
            console.log(data)
            this.pep= data;
          }, error => console.log(error));
      
          this.service4.getN(this.pers_nat.code_nationalite)
          .subscribe(data => {
              console.log(data)
              this.pep= data;
            }, error => console.log(error));
  }

  details(id: number){  
    this.service.updateP(this.personne_physique).subscribe(data => {
    console.log(data)});    
}

}
