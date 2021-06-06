import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'app/securityServices/auth.service';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent implements OnInit {

  currentUser: any;
  doChange:boolean = false ; 
  message : any; 
  name:string;
  user:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data1,private toastr : ToastrService,public dialogRef: MatDialogRef<MotDePasseComponent>,private token: TokenStorageService, private service: AuthService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.name=this.data1.test;
    let resp=this.service.getUser(this.name);
    resp.subscribe((data2)=>this.user=data2);
 
  }
  changer()
  {
    this.doChange=true;
  }
  changerMotDePasse(mdp:string,mdp1:string,nom:string)
  { 
    if(mdp!=mdp1)
    {
      this.toastr.warning("Les deux mot de passe ne sont pas identiques");
    }
    else{
     let resp2= this.service.updateMotDePasse(nom,this.user);
    resp2.subscribe((data)=>this.message=data); 
   
    let snackBarRef = this.snackBar.open('Modifié avec succès!', 'Succès', {
      duration: 3000
    });
    this.dialogRef.close();}
     
  }
}



