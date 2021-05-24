import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';

import { PepServiceService } from 'app/pep/service_pep/pep-service.service';
import { NationaliteServiceService } from 'app/service_clients/nationalite-service.service';
import { PersNatService } from 'app/service_clients/pers-nat.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { RevenuService } from 'app/service_clients/revenu.service';
import { NationaliteComponent } from 'app/user-profile/nationalite/nationalite.component';
import { PepComponent } from 'app/user-profile/pep/pep.component';

import { RevenuComponent } from 'app/user-profile/revenu/revenu.component';

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
  nat:any;
  test=false;
  message:any;
  personne_physique1:personne_physique=new personne_physique();
  constructor(private service :PersonnePhysiqueService,private service5 :RevenuService,private snackBar: MatSnackBar, private service1:RevenuService,private dialog: MatDialog,private service4:NationaliteServiceService,private service2:PepServiceService ,private service3:PersNatService ,private router: Router,private route: ActivatedRoute) { }

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

   onClick(Code_clt:number) {  
    const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;   
     dialogConfig.data = { Code_clt };
     dialogConfig.width = "60%";
     this.dialog.open(RevenuComponent,dialogConfig);
    } 


  details(id: number){  
    
   

    this.personne_physique.listRevenu[0].persPhy=this.personne_physique.codeClient;
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
}

supprimer(){
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[0].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  location.reload();     
}
onClick2(Code_clt:number) {  
  
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;   
  dialogConfig.data = { Code_clt};
  dialogConfig.width = "60%";
  this.dialog.open(NationaliteComponent,dialogConfig);


}






















supprimer1(){
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[1].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  location.reload();     
}
supprimer2(){
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[2].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  location.reload();     
}
supprimer3(){
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[3].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  location.reload();     
}
supprimer4(){
  let resp= this.service5.deleteR(this.personne_physique.listRevenu[4].codeRevenu);
  resp.subscribe((data)=>this.message=data);
  location.reload();     
}
}
