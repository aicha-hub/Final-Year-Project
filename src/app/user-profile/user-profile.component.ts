import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import {pays} from 'app/client/pays';
import { FormControl, NgForm, Validators } from '@angular/forms';
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

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  message:any;
   message1:any;
   personne_physique:personne_physique=new personne_physique();
   revenu :revenu =new revenu();
   v:number;
   liste_nationnalite=liste_nat;
  test: Boolean;
  listeSecteur=listeSecteur;
  listeProfession=listeProfession;

  selectedFiles : FileList ; 
  creationDate : string ; 
  progress : Number ;
  currentFile : File ; 
  justificatif : justificatif; 
  
  
  
  constructor(private service:PersonnePhysiqueService, private router: Router ,private snackBar: MatSnackBar,private dialog: MatDialog) { }


  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
   
  ngOnInit(): void {
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
        this.justificatif=new justificatif("","29/04/2021",this.currentFile.type,this.currentFile);
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
 
   

  public CreateNow()
  {
    
      
    let resp= this.service.updatePP(this.personne_physique.codeClient,this.personne_physique);
    resp.subscribe((data)=>this.message=data);
    
    let snackBarRef = this.snackBar.open('Client cree!', 'Bravo', {
      duration: 3000
    });

    this.router.navigate(['listeClient']);
   
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

      onClick2(Code_clt:number,P:personne_physique,Form:NgForm) {  
        this.Add(Form);
        this.personne_physique.numCin=Code_clt;
        let resp= this.service.CreatePP(this.personne_physique);
        resp.subscribe((data)=>this.message=data);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;   
        dialogConfig.data = { Code_clt,P };
        dialogConfig.width = "60%";
        this.dialog.open(NationaliteComponent,dialogConfig);
      
      
      }

      
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
