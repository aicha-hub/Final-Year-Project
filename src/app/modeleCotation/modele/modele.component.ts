import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModeleService } from 'app/risque/modele.service';
import { modeleCotation } from 'app/risque/modeleCotation';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
import { NiveauRisqueComponent } from '../niveau-risque/niveau-risque.component';
@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableBoard = false;
  showConseillerBoard=false;
  showChefBoard=false;
  modele:any;
  message:any;
  private roles: string[];
  constructor(private service : ModeleService, private dialog:MatDialog,private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
     
   
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showResponsableBoard = this.roles.includes('ROLE_RESPONSABLE');
     this.showConseillerBoard = this.roles.includes('CONSEILLER_CLIENTS');
      this.showChefBoard = this.roles.includes('CHEF_AGENCE');
      
    }

    let resp=this.service.getModele(1);
    resp.subscribe((dataSource)=>this.modele=dataSource);
    
  }
   modifier(modele:modeleCotation)
   {
    let resp1=this.service.update(1,modele);
    resp1.subscribe((data)=>this.message=data);
   }
   niveauRisque(modele:modeleCotation) {  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data = { modele };
    dialogConfig.width = "50%";
    this.dialog.open(NiveauRisqueComponent,dialogConfig);
   } 
}
