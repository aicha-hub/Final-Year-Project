import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { liste_nat } from 'app/client/list_nat';
import { nationalite } from 'app/client/nationalite';
import { persNat } from 'app/client/persNat';
import { personne_physique } from 'app/client/personne_physique';
import { NationaliteServiceService } from 'app/service_clients/nationalite-service.service';
import { PersNatService } from 'app/service_clients/pers-nat.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-nationalite',
  templateUrl: './nationalite.component.html',
  styleUrls: ['./nationalite.component.css']
})
export class NationaliteComponent implements OnInit {

 liste_nationnalite=liste_nat;
 form: FormGroup ;
  id1=20;
  nationalite:nationalite=new nationalite();
  message:any;
  id:number;
  pers_nat :persNat =new persNat();
 
  
 

  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service1:NationaliteServiceService,private service:PersNatService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<NationaliteComponent>) { }

 
  ngOnInit(): void {                                                                                                    
    this.id=this.data1.Code_clt;
    this.pers_nat.pers1=this.id;
    this.form= new FormGroup({  paysNaissance: new FormControl('', Validators.required)});
    
  }


  OnCreateNAT()
  {let snackBarRef = this.snackBar.open('nationalite est ajoutée!', 'Bravo', {
    duration: 3000
  });

 
 
  let resp= this.service.CreatePP(this.pers_nat);
     resp.subscribe((data)=>this.message=data);

   
     
  }

  Close()
  {this.dialogRef.close();}

}
