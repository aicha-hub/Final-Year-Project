import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { justificatif } from '../justificatif';

@Component({
  selector: 'app-details-fatca-pp',
  templateUrl: './details-fatca-pp.component.html',
  styleUrls: ['./details-fatca-pp.component.css']
})
export class DetailsFatcaPPComponent implements OnInit {

  personne_physique: any ; 
  id : number ; 
  selectedFiles : FileList ; 
  creationDate : string ; 
  progress : Number ;
  currentFile : File ; 
  justificatif : justificatif;
  message:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data1 , public dialogRef: MatDialogRef<DetailsFatcaPPComponent>,private service : PersonnePhysiqueService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personne_physique=new personne_physique();
    this.service.getPP(this.data1.personne_physique.codeClient).subscribe(data => {
      console.log(data)
      this.personne_physique = data;
    }, error => console.log(error));}

    close(): void{
      this.dialogRef.close();
    
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

}
