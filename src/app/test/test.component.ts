import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { liste_nat } from 'app/client/list_nat';
import { personne_physique } from 'app/client/personne_physique';

import { PepServiceService } from 'app/pep/service_pep/pep-service.service';
import { NationaliteServiceService } from 'app/service_clients/nationalite-service.service';
import { PersNatService } from 'app/service_clients/pers-nat.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { RevenuService } from 'app/service_clients/revenu.service';
import { NationaliteComponent } from 'app/user-profile/nationalite/nationalite.component';
import { PepComponent } from 'app/user-profile/pep/pep.component';

import { RevenuComponent } from 'app/user-profile/revenu/revenu.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  personne_physique:any;
  revenu :any;
  liste_nationnalite=liste_nat;
  delete1=true;
  verif=true;
  delete=true;
  delete2=true;
  delete3=true;
  delete4=true;
  d=true;
  pep:any;
  rev=false;
  rev1=false;
  rev2=false;
  rev3=false;
  id:number;
  pers_nat:any;
  nat:any;
  test=false;
  lol=false;
  message:any;
  personne_physique1:personne_physique=new personne_physique();
  constructor(private service :PersonnePhysiqueService,private service5 :RevenuService,private toastr : ToastrService,private snackBar: MatSnackBar, private service1:RevenuService,private dialog: MatDialog,private service4:NationaliteServiceService,private service2:PepServiceService ,private service3:PersNatService ,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
   
   this.service.getPP(this.id)
    .subscribe(data => {
        console.log(data)
        this.personne_physique = data;
      }, error => console.log(error));

   

        this.service3.getPPS()
        .subscribe(data => {
            console.log(data)
            this.pers_nat= data;
          }, error => console.log(error));
      

      
          this.service4.getN(this.id)
          .subscribe(data => {
              console.log(data)
              this.nat= data;
            }, error => console.log(error));
  }
  
  onClick1(Code_clt:number) {  


    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;   
    dialogConfig.data = { Code_clt };
    dialogConfig.width = "60%";
    this.dialog.open(PepComponent,dialogConfig);
   } 
   reloadPage(): void {
    window.location.reload();
  }
   onClick(Code_clt:number) {  
    const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;   
     dialogConfig.data = { Code_clt };
     dialogConfig.width = "60%";
     this.dialog.open(PepComponent,dialogConfig);
     this.lol=true;
     
   
    } 


  details(id: number){  
    if(this.personne_physique.numPassport=="")
     {
      this.verif=false;
      this.toastr.warning("Le numéro du passeport doit etre composé de 9 caractères");
     }
     if(this.personne_physique.carteSejour.length =="")
     {
      this.verif=false;
      this.toastr.warning("La carte sejour  doit etre composée de 9 caractères");
     }

     if(this.personne_physique.numTelephoner=="")
     {
      this.verif=false;
      this.toastr.warning("Le numero de telephone doit etre composée de 8 chiffres");
     }
    
     if(this.personne_physique.affSociale==""){this.toastr.warning("Veuillez remplir le numéro d'affliation");}
    if(this.personne_physique.etatCivil==""){this.toastr.warning("Veuillez remplir l'etat civil");}
    if(this.personne_physique.capaciteJuridique==""){this.toastr.warning("Veuillez remplir la capacite juridique");}
    if(this.personne_physique.indiTelephonique==""){this.toastr.warning("Veuillez remplir l'indice telephonique'");}
 
    if(this.personne_physique.adresse==""){this.toastr.warning("Veuillez remplir l'adresse");}
    if(this.personne_physique.categorieEmployeur==""){this.toastr.warning("Veuillez remplir la categorie employeur");}
    if(this.personne_physique.contratTravail==""){this.toastr.warning("Veuillez remplir le contrat travail");}
    
   
 
    if(this.personne_physique.listRevenu[0].nature==""){this.toastr.warning("Veuillez remplir la nature du revenu");}
    if(this.personne_physique.listRevenu[0].periodicite==""){this.toastr.warning("Veuillez remplir la periodicite du revenu");}
    if(this.personne_physique.listRevenu[0].devise==""){this.toastr.warning("Veuillez remplir le devise du revenu");}
    if(this.personne_physique.listRevenu[0].montant==null){this.toastr.warning("Veuillez remplir le montant du revenu");}

    if((this.personne_physique.listRevenu.length==2)&&(!this.lol)){
    if((this.personne_physique.listRevenu[1].montant!=null)||(this.personne_physique.listRevenu[1].devise!="")||
    (this.personne_physique.listRevenu[1].periodicite!="")||(this.personne_physique.listRevenu[1].nature!=""))
{
  if((this.personne_physique.listRevenu[1].montant==null)||(this.personne_physique.listRevenu[1].devise=="")||
  (this.personne_physique.listRevenu[1].periodicite=="")||(this.personne_physique.listRevenu[1].nature=="")){this.rev=true;}
}}



if((this.personne_physique.listRevenu.length==3)&&(!this.lol)){
if((this.personne_physique.listRevenu[2].montant!=null)||(this.personne_physique.listRevenu[2].devise!="")||
(this.personne_physique.listRevenu[2].periodicite!="")||(this.personne_physique.listRevenu[2].nature!=""))
{
if((this.personne_physique.listRevenu[2].montant==null)||(this.personne_physique.listRevenu[2].devise=="")||
(this.personne_physique.listRevenu[2].periodicite=="")||(this.personne_physique.listRevenu[2].nature=="")){this.rev1=true;}
}}
if((this.personne_physique.listRevenu.length==4)&&(!this.lol)){
  if((this.personne_physique.listRevenu[3].montant!=null)||(this.personne_physique.listRevenu[3].devise!="")||
  (this.personne_physique.listRevenu[3].periodicite!="")||(this.personne_physique.listRevenu[3].nature!=""))
  {
  if((this.personne_physique.listRevenu[3].montant==null)||(this.personne_physique.listRevenu[3].devise=="")||
  (this.personne_physique.listRevenu[3].periodicite=="")||(this.personne_physique.listRevenu[3].nature=="")){this.rev2=true;}
  }}

  if((this.personne_physique.listRevenu.length==5)&&(!this.lol)){
    if((this.personne_physique.listRevenu[4].montant!=null)||(this.personne_physique.listRevenu[4].devise!="")||
    (this.personne_physique.listRevenu[4].periodicite!="")||(this.personne_physique.listRevenu[4].nature!=""))
    {
    if((this.personne_physique.listRevenu[4].montant==null)||(this.personne_physique.listRevenu[4].devise=="")||
    (this.personne_physique.listRevenu[4].periodicite=="")||(this.personne_physique.listRevenu[4].nature=="")){this.rev3=true;}
    }}
if((this.rev)||(this.rev1)||(this.rev2)||(this.rev3)){
this.toastr.warning("Veuillez verifier les données des revenus necessaires .")
}










//conditions necessaires :
if((this.personne_physique.contratTravail!="")&&(this.personne_physique.categorieEmployeur!="")&&(this.personne_physique.capaciteJuridique!="")
&&(this.personne_physique.etatCivil!="")&&(this.personne_physique.carteSejour!="")&&(this.personne_physique.numPassport!="")
&&(this.personne_physique.listRevenu[0].nature!="")&&(this.personne_physique.listRevenu[0].periodicite!="")
&&(this.personne_physique.listRevenu[0].devise!="")&&(this.personne_physique.listRevenu[0].montant!=null)&&
(this.personne_physique.indiTelephonique!=null)&&(this.personne_physique.numTelephone!="")
&&(this.personne_physique.adresse!="")&&(this.personne_physique.affSociale!="")&&(this.verif)&&
(!this.rev)&&(!this.rev1)&&(!this.rev2)&&(!this.rev2))
{ this.personne_physique.listRevenu[0].persPhy=this.personne_physique.codeClient;
    if(this.personne_physique.listRevenu.length==2)
   {this.personne_physique.listRevenu[1].persPhy=this.personne_physique.codeClient;}
   console.log(this.personne_physique.listRevenu.length);
   if(this.personne_physique.listRevenu.length==3)
   {this.personne_physique.listRevenu[1].persPhy=this.personne_physique.codeClient;
    this.personne_physique.listRevenu[2].persPhy=this.personne_physique.codeClient;}
    if(this.personne_physique.listRevenu.length==4)
    {this.personne_physique.listRevenu[1].persPhy=this.personne_physique.codeClient;
     this.personne_physique.listRevenu[2].persPhy=this.personne_physique.codeClient;
     this.personne_physique.listRevenu[3].persPhy=this.personne_physique.codeClient;}
     if(this.personne_physique.listRevenu.length==5)
     {this.personne_physique.listRevenu[1].persPhy=this.personne_physique.codeClient;
      this.personne_physique.listRevenu[2].persPhy=this.personne_physique.codeClient;
      this.personne_physique.listRevenu[3].persPhy=this.personne_physique.codeClient;
      this.personne_physique.listRevenu[4].persPhy=this.personne_physique.codeClient;}
   console.log(this.personne_physique.listRevenu.length);
    let resp= this.service.updateMAJ(this.personne_physique.codeClient,this.personne_physique);
    resp.subscribe((data)=>this.message=data);
    let snackBarRef = this.snackBar.open('Mise à jour se fait avec succée !', 'Bravo', {
      duration: 3000
    });

    this.router.navigate(['clientsPhysiques']);
  }     
}

supprimer(code:number){
 

  
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[0].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  this.delete=false ;   
}

onClick2(Code_clt:number) {  
  
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;   
  dialogConfig.data = { Code_clt};
  dialogConfig.width = "60%";
  this.dialog.open(NationaliteComponent,dialogConfig);


}






















supprimer1(code:number){
  let resp= this.service5.deleteR(code);
  resp.subscribe((data)=>this.message=data);
  this.delete1=false;   
}
supprimer2(code:number){
  let resp= this.service5.deleteR(code);
  resp.subscribe((data)=>this.message=data);
  this.delete2=false ; 
}
supprimer3(code:number){
  let resp= this.service5.deleteR(code);
  resp.subscribe((data)=>this.message=data);
  this.delete3=false ;     
}
supprimer4(code:number){
  let resp= this.service5.deleteR(code);
  resp.subscribe((data)=>this.message=data);
  this.delete4=false ; 
    
}
}
