import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-personne-physique',
  templateUrl: './personne-physique.component.html',
  styleUrls: ['./personne-physique.component.css']
})
export class PersonnePhysiqueComponent implements OnInit {

  personne_physique:any;
  id:number;
  message:any;

  constructor( private service:PersonnePhysiqueService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.personne_physique=new personne_physique();
    this.id = this.route.snapshot.params['id'];

    

     this.service.getPP(this.id)
    .subscribe(data => {
        console.log(data)
        this.personne_physique = data;
      }, error => console.log(error));

    
  }

  risque(id:number)
  {
    this.router.navigate(['/risqueClientPhysique', id])
  }
    
  details(id: number){
   this.router.navigate(['/details', id])
 }

 clientsMorales()
 {
   this.router.navigate(['/clientsMorales'])
 }
   
 clientsPhysiques(){
  this.router.navigate(['/clientsPhysiques'])
}

}
