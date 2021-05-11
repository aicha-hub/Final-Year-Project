import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChoixComponent } from 'app/ajouter/choix/choix.component';
import { personne_morale } from 'app/client/personne_morale';
import { personne_physique } from 'app/client/personne_physique';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { DetailsFatcaPPComponent } from '../details-fatca-pp/details-fatca-pp.component';
import { DetailsFatcaComponent } from '../details-fatca/details-fatca.component';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  personne_physique:any;
  personne_morale:any;
 message:any;
  constructor(private dialog:MatDialog,private dialoge:MatDialog,private service:PersonneMoraleServiceService, private service1:PersonnePhysiqueService  ,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getPMFatca();
    resp.subscribe((data)=>this.personne_morale=data);
    let resp1=this.service1.getPPFatca();
    resp1.subscribe((data)=>this.personne_physique=data);
    
  }
  
  details(personne_morale:personne_morale){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.width = "50%";
    dialogConfig.height = "70%";
    dialogConfig.data = {personne_morale};
    this.dialoge.open(DetailsFatcaComponent,dialogConfig);
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }
  
  
  
    


   risquePP(id:number)
   {
     this.router.navigate(['/risqueClientPhysique', id])
   }
     
   detailsPP(personne_physique:personne_physique){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.width = "50%";
    dialogConfig.height = "50%";
    dialogConfig.data = {personne_physique};
    this.dialog.open(DetailsFatcaPPComponent,dialogConfig);
   
  }
}


