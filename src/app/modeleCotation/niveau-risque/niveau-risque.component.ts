import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModeleService } from 'app/risque/modele.service';
import { modeleCotation } from 'app/risque/modeleCotation';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
@Component({
  selector: 'app-niveau-risque',
  templateUrl: './niveau-risque.component.html',
  styleUrls: ['./niveau-risque.component.css']
})
export class NiveauRisqueComponent implements OnInit {
  modele:modeleCotation;
  message:any;
  isLoggedIn = false;
  showAdminBoard = false;
  showChefBoard=false;
  private roles: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data1,public dialogRef: MatDialogRef<NiveauRisqueComponent>, private service:ModeleService,private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.modele=this.data1.modele ; 
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      
      this.showChefBoard = this.roles.includes('CHEF_AGENCE');
      
    }
  }
  close(): void{
    this.dialogRef.close();  
}
  modifier(modele:modeleCotation)
   {
    let resp1=this.service.update(1,modele);
    resp1.subscribe((data)=>this.message=data);
    this.dialogRef.close();  
   }
}
