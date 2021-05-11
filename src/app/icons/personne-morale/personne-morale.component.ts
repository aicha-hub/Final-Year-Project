import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-personne-morale',
  templateUrl: './personne-morale.component.html',
  styleUrls: ['./personne-morale.component.css']
})
export class PersonneMoraleComponent implements OnInit {
  personne_morale:any;
  id:number;
  message:any;

  constructor( private service:PersonneMoraleServiceService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.personne_morale=new personne_morale();
    this.id = this.route.snapshot.params['id'];

    

     this.service.getPM(this.id)
    .subscribe(data => {
        console.log(data)
        this.personne_morale = data;
      }, error => console.log(error));

    
  }

  details(id: number){
    this.router.navigate(['/detailsClientMorale', id])
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }

  clientsMorales()
  {
    this.router.navigate(['/clientsMorales'])
  }
    
  clientsPhysiques(){
   this.router.navigate(['/clientsPhysiques'])
 }
}
