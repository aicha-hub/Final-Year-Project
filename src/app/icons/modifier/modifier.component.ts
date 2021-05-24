import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { beneficaire_effectif } from 'app/client/beneficiaire_effectif';
import { liste_nat } from 'app/client/list_nat';
import { personne_morale } from 'app/client/personne_morale';
import { representant_legal } from 'app/client/representant_legal';
import { BeneficiaireEffectifServiceService } from 'app/service_clients/beneficiaire-effectif-service.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { RepresentantLegalService } from 'app/service_clients/representant-legal.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  personne_morale:any;
  id:number;
  representant_legal:any;
  beneficiaireEffectif:any;
  beneficiaireEffectif4:any;
  beneficiaireEffectif2:any;
  beneficiaireEffectif3:any;
  liste_nationnalite=liste_nat;
  delete:any;
  delete1:any;
  delete2:any;
  delete3:any;
  createRep:any;
  createBe:any;
  beneficiaire_effectif:beneficaire_effectif=new beneficaire_effectif();
  representant_legal1: representant_legal= new representant_legal();
  message : any; 
  constructor(private service2:BeneficiaireEffectifServiceService ,private service1: RepresentantLegalService ,private service:PersonneMoraleServiceService,private router: Router,private route: ActivatedRoute,private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.delete=true;
    this.delete1=true;
    this.delete2=true;
    this.delete3=true;
    this.createRep=true;
    this.createBe=true;
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
  deleteBeneficiaire(code:number)
  {
    this.delete=false ; 
    let resp=this.service2.deletePR(code);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    let snackBarRef = this.snackBar.open('Supprimé avec succès!', 'Succès', {
      duration: 3000
    });
  }
  deleteBeneficiaire1(code:number)
  {
    this.delete1=false ; 
    let resp=this.service2.deletePR(code);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    let snackBarRef = this.snackBar.open('Supprimé avec succès!', 'Succès', {
      duration: 3000
    });
  }
  deleteBeneficiaire2(code:number)
  {
    this.delete2=false ; 
    let resp=this.service2.deletePR(code);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    let snackBarRef = this.snackBar.open('Supprimé avec succès!', 'Succès', {
      duration: 3000
    });
  }
  deleteBeneficiaire3(code:number)
  {
    this.delete3=false ; 
    let resp=this.service2.deletePR(code);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    let snackBarRef = this.snackBar.open('Supprimé avec succès!', 'Succès', {
      duration: 3000
    });
  }
  createNow(code:number,code1:number)
  { 
    let resp=this.service1.deleteRL(code1);
    resp.subscribe((data)=> {
      console.log(data);
    },
    error => console.log(error));
    this.representant_legal1.personneMoraleList.push(this.personne_morale) ;
    let rep1=this.service1.CreateRL(this.representant_legal1);
    rep1.subscribe((data)=>this.message=data);
    this.createRep=false;
    let snackBarRef = this.snackBar.open('Representant crée avec succès!', 'Succès', {
      duration: 3000
    });
  }
  createBeneficiaire(code:number)
  {
    this.beneficiaire_effectif.personneMoraleArrayList.push(this.personne_morale) ;
    let rep1=this.service2.CreatePR(this.beneficiaire_effectif);
    rep1.subscribe((data)=>this.message=data);
    this.createBe=false;
    let snackBarRef = this.snackBar.open('Beneficiaire Effectif crée avec succès!', 'Succès', {
      duration: 3000
    });
  }
  updateNow ( codeBE : number,codeBE1 : number,codeBE2 : number,codeBE3 : number, codeRep:number )
  {
    let resp2= this.service.updatePersonne(this.id,this.personne_morale);
    resp2.subscribe((data)=>this.message=data); 
    let be = this.service2.updatePR(codeBE,this.beneficiaireEffectif);
    be.subscribe((data)=>this.message=data);
    let be1 = this.service2.updatePR(codeBE1,this.beneficiaireEffectif2);
    be1.subscribe((data)=>this.message=data);
    let be2 = this.service2.updatePR(codeBE2,this.beneficiaireEffectif3);
    be2.subscribe((data)=>this.message=data);
    let be3 = this.service2.updatePR(codeBE3,this.beneficiaireEffectif4);
    be3.subscribe((data)=>this.message=data);
   if (this.createRep=="true")
    {let rep1=this.service1.updateRL(codeRep,this.representant_legal);
    rep1.subscribe((data)=>this.message=data);}
    let snackBarRef = this.snackBar.open('Mise à jour faite avec succès!', 'Succès', {
      duration: 3000
    });
    this.router.navigate(['/clientsMorales']) ;
  }
  updateNow1 ( codeBE : number, codeBE1 : number,codeBE2 : number, codeRep:number)
  {
    let resp2= this.service.updatePersonne(this.id,this.personne_morale);
    resp2.subscribe((data)=>this.message=data); 
    let be = this.service2.updatePR(codeBE,this.beneficiaireEffectif);
    be.subscribe((data)=>this.message=data);
    let be1 = this.service2.updatePR(codeBE1,this.beneficiaireEffectif2);
    be1.subscribe((data)=>this.message=data);
    let be2 = this.service2.updatePR(codeBE2,this.beneficiaireEffectif3);
    be2.subscribe((data)=>this.message=data);
    if (this.createRep=="true")
    {let rep1=this.service1.updateRL(codeRep,this.representant_legal);
    rep1.subscribe((data)=>this.message=data);}
    let snackBarRef = this.snackBar.open('Mise à jour faite avec succès!', 'Succès', {
      duration: 3000
    });
    this.router.navigate(['/clientsMorales']) ;
  }
  updateNow2 ( codeBE : number ,codeBE1 : number, codeRep:number)
  {
    let be = this.service2.updatePR(codeBE,this.beneficiaireEffectif);
    be.subscribe((data)=>this.message=data);
    let be1 = this.service2.updatePR(codeBE1,this.beneficiaireEffectif2);
    be1.subscribe((data)=>this.message=data);
    let resp2= this.service.updatePersonne(this.id,this.personne_morale);
    resp2.subscribe((data)=>this.message=data);
    if (this.createRep=="true")
    {let rep1=this.service1.updateRL(codeRep,this.representant_legal);
    rep1.subscribe((data)=>this.message=data);}
    let snackBarRef = this.snackBar.open('Mise à jour faite avec succès!', 'Succès', {
      duration: 3000
    });
    this.router.navigate(['/clientsMorales']) ;
  }
  updateNow3 ( codeBE : number, codeRep:number)
  {
    let resp2= this.service.updatePersonne(this.id,this.personne_morale);
    resp2.subscribe((data)=>this.message=data); 
    let be = this.service2.updatePR(codeBE,this.beneficiaireEffectif);
    be.subscribe((data)=>this.message=data);
    if (this.createRep=="true")
    {let rep1=this.service1.updateRL(codeRep,this.representant_legal);
    rep1.subscribe((data)=>this.message=data);}
    let snackBarRef = this.snackBar.open('Mise à jour faite avec succès!', 'Succès', {
      duration: 3000
    });
    this.router.navigate(['/clientsMorales']) ;
  }
}