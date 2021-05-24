import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { justificatif } from '../justificatif';

@Component({
  selector: 'app-details-fatca',
  templateUrl: './details-fatca.component.html',
  styleUrls: ['./details-fatca.component.css']
})
export class DetailsFatcaComponent implements OnInit {
  personne_morale: any ; 
  id : number ; 
  selectedFiles : FileList ; 
  creationDate : string ; 
  progress : Number ;
  currentFile : File ; 
  justificatif : justificatif;
  message:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data1, public dialogRef: MatDialogRef<DetailsFatcaComponent>,private service : PersonneMoraleServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personne_morale=new personne_morale();
    this.service.getPM(this.data1.personne_morale.codeClient).subscribe(data => {
      console.log(data)
      this.personne_morale = data;
    }, error => console.log(error));
  }

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


  
  
  
 