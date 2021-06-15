import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import {pays} from 'app/client/pays';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RevenuComponent } from './revenu/revenu.component';
import { NationaliteComponent } from './nationalite/nationalite.component';
import { revenu } from 'app/client/revenu';
import { RevenuService } from 'app/service_clients/revenu.service';
import { PepComponent } from './pep/pep.component';
import { liste_nat } from 'app/client/list_nat';
import { ParenteComponent } from './parente/parente.component';
import { listeSecteur } from 'app/client/listeSecteur';
import { listeProfession } from 'app/client/listeProfession';
import { justificatif } from 'app/fatca/justificatif';
import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 unique:boolean;
  message:any;
   message1:any;
   personne_physique:personne_physique=new personne_physique();
   revenu :revenu =new revenu();
   v:number;
   liste_nationnalite=liste_nat;
  test: Boolean;
  listeSecteur=listeSecteur;
  listeProfession=listeProfession;
  form: FormGroup ;
  form1: FormGroup ;
  selectedFiles : FileList ; 
  creationDate : string ; 
  progress : Number ;
  currentFile : File ; 
  justificatif : justificatif; 
  verif:boolean;
  
  
  constructor(private service:PersonnePhysiqueService,private toastr : ToastrService, private router: Router ,private snackBar: MatSnackBar,private dialog: MatDialog) { }


  

  
   
  ngOnInit(): void {
    this.form= new FormGroup({
      codeClient : new FormControl(0,Validators.required),
      prenom: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      paysNaissance: new FormControl('', Validators.required),
      FO1 : new FormControl('', Validators.required), 
      v : new FormControl('', Validators.required),    
      us : new FormControl('', Validators.required),
      c_juridique : new FormControl('', Validators.required),
      passeport: new FormControl(''),
      carte_sejour : new FormControl(''),
      huey12 : new FormControl('', Validators.required),
      huey11 : new FormControl('', Validators.required),
      huey13 : new FormControl('', Validators.required),
      pays_res : new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      indiTelephonique: new FormControl(0,Validators.required),
      contact: new FormControl(0,[Validators.required, Validators.maxLength(8)]),
      email: new FormControl('', Validators.email),
      Profession: new FormControl('', Validators.required),
      secteurTravail: new FormControl('', Validators.required),
      paysTravail: new FormControl('', Validators.required),
      drone41: new FormControl('', Validators.required),
      huey5: new FormControl('', Validators.required),
      num_RNE: new FormControl(''),
      date_extrait_rne: new FormControl(''),
      drone6: new FormControl(''),
      matricule_fiscal: new FormControl(''),
      code_douane:new FormControl(''),
      huey7: new FormControl('', Validators.required),
      num_aff: new FormControl(0),
      huey20: new FormControl('', Validators.required),
      dewey10: new FormControl('', Validators.required),
     
    });  
  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
  Add(Form:NgForm)
  {
    this.creationDate=formatDate(new Date(),'mediumDate','en_FR') ;
    this.progress = 0;
    
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.justificatif=new justificatif("","19/06/2021",this.currentFile.type,this.currentFile);
        this.service.AddDocument(this.justificatif,this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
  
            
          });
        }
          this.selectedFiles = undefined; 
    }
  }
 


  public CreateNow(numPassport:number,carteSejour:number,contact:number)
  {
    if(numPassport!=9)
    {
     this.toastr.error("Le numéro du passport doit étre composé de 9 caractéres");
    }
    if(carteSejour!=9)
    {
     this.toastr.error("La carte séjour doit étre composé de 9 caractéres");
    }
    if(contact!=8)
    {
     this.toastr.error("Le numéro de téléphone doit étre composé de 8 chiffres");
    }
    if((numPassport==9)&&(carteSejour==9)&&(contact==8))
   { let resp= this.service.updatePP(this.personne_physique.codeClient,this.personne_physique);
    resp.subscribe((data)=>this.message=data);
    
    let snackBarRef = this.snackBar.open('Client physique cree!', 'Bravo', {
      duration: 3000
    });

    this.router.navigate(['clientsPhysiques']);}
   
  }
     


      onClick(Code_clt:number) {  
      const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;   
       dialogConfig.data = { Code_clt };
       dialogConfig.width = "60%";
       this.dialog.open(RevenuComponent,dialogConfig);
      } 


       onClick1(Code_clt:number) {  
       const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;   
       dialogConfig.data = { Code_clt };
       dialogConfig.width = "60%";
       this.dialog.open(PepComponent,dialogConfig);
      } 

      onClick2(Code_clt:number,P:personne_physique,Form:NgForm,codeClient:number) {  
        
      let test=this.service.exists(this.personne_physique.codeClient)
      test.subscribe(((res: boolean) => {
          this.unique=res;
          if(this.unique==true)
          {
            this.toastr.error("Ce client existe déjà veuillez verifier le code CIN!");
          }
          else if(codeClient!=8)
          {
           this.toastr.error("Le numéro de la carte d'identité nationale doit étre composé de 8 chiffres");
          }
          else {
       
            
        this.Add(Form);
        this.personne_physique.numCin=Code_clt;
        let resp= this.service.CreatePP(this.personne_physique);
        resp.subscribe((data)=>this.message=data);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;   
        dialogConfig.data = { Code_clt,P };
        dialogConfig.width = "60%";
        this.dialog.open(NationaliteComponent,dialogConfig)}
      
      } ));}
      
      
      

      
     onClick3(Code_clt:number) {  
      let resp= this.service.CreatePP(this.personne_physique);
      resp.subscribe((data)=>this.message=data);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;   
      dialogConfig.data = { Code_clt };
      dialogConfig.width = "60%";
      this.dialog.open(ParenteComponent,dialogConfig);
    
      }

}
