import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { beneficaire_effectif } from 'app/client/beneficiaire_effectif';
import { liste_nat } from 'app/client/list_nat';

import { personne_morale } from 'app/client/personne_morale';
import { BeneficiaireEffectifServiceService } from 'app/service_clients/beneficiaire-effectif-service.service';

import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-beneficiaires-effectifs',
  templateUrl: './beneficiaires-effectifs.component.html',
  styleUrls: ['./beneficiaires-effectifs.component.css']
})
export class BeneficiairesEffectifsComponent implements OnInit {


  beneficiaire_effectif:beneficaire_effectif= new beneficaire_effectif();
  message:any;
  messsage2:any;
  pers:personne_morale;
  liste_nationnalite=liste_nat;
  constructor(@Inject(MAT_DIALOG_DATA) public data1,private service1:PersonneMoraleServiceService, private service:BeneficiaireEffectifServiceService,private snackBar: MatSnackBar, private dialogRef: MatDialogRef<BeneficiairesEffectifsComponent>,private service2:PersonneMoraleServiceService) { }
  




  ngOnInit(): void {
   
    
    

  }

  OnCreate (Code_clt:number)
  {let snackBarRef = this.snackBar.open('Les beneficiaires effectifs sont ajoutés!', 'Bravo', {
    duration: 3000 
  });
     this.beneficiaire_effectif.numCin=Code_clt;
     
     this.pers=this.data1.p;


   
     
     let resp= this.service.CreatePR(this.beneficiaire_effectif);
     resp.subscribe((data)=>this.message=data);

   

    

     //let resp2= this.service2.CreatePM(this.p);
      //resp.subscribe((data)=>this.message=data);



     
      

  }

  onSet() {
    this.pers.beneficiaireEffectifList.push(this.beneficiaire_effectif);

    let resp1= this.service1.CreatePM(this.pers);
    resp1.subscribe((data)=>this.message=data);
    
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }
  Close()
  {
    
 
    this.pers.beneficiaireEffectifList.push(this.beneficiaire_effectif);

    let resp1= this.service1.CreatePM(this.pers);
    resp1.subscribe((data)=>this.message=data);

    this.dialogRef.close();}

  
}
