import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChoixComponent>, private router :Router) { }

  ngOnInit(): void {
  }

  ajouterClientMoral()
  { 
    this.dialogRef.close();
    this.router.navigate(['/clientMoral'])   
  }
    
  ajouterClientPhysique()
  {
   this.router.navigate(['/clientPhysique'])
   this.dialogRef.close();
  }

close():void
{
  this.dialogRef.close();
  this.router.navigate(['/listeClient'])
}


}
