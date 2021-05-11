import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DetailsComponent } from './table-list/details/details.component';
import { MaterialModule } from './material/material.module';
import { RevenuComponent } from './user-profile/revenu/revenu.component';
import { NationaliteComponent } from './user-profile/nationalite/nationalite.component';
import { PepComponent } from './user-profile/pep/pep.component';
import { MatTableModule } from '@angular/material/table';
import { BeneficiairesEffectifsComponent } from './typography/beneficiaires-effectifs/beneficiaires-effectifs.component';
import { PepPMComponent } from './typography/pep-pm/pep-pm.component';
import { ParenteComponent } from './user-profile/parente/parente.component';
import { TestComponent } from './test/test.component';
import { DetailsPMComponent } from './icons/details-pm/details-pm.component';
import { DetailsRisqueComponent } from './icons/details-risque/details-risque.component';
import { RisqueComponent } from './table-list/risque/risque.component';
import { FatcaComponent } from './fatca/fatca.component';
import { OperationsComponent } from './operations/operations.component';
import { ListePersonnePhyComponent } from './table-list/liste-personne-phy/liste-personne-phy.component';
import { AffichageComponent } from './fatca/affichage/affichage.component';
import { AffichageRisqueComponent } from './risque/affichage-risque/affichage-risque.component';
import { RisquePersonneMoraleComponent } from './risque/risque-personne-morale/risque-personne-morale.component';
import { CompteComponent } from './compte/compte.component';
import { OuvertureCompteComponent } from './compte/ouverture-compte/ouverture-compte.component';
import { TransactionComponent } from './operations/transaction/transaction.component';
import { TransactionParClientComponent } from './operations/transaction-par-client/transaction-par-client.component';
import { DetailsTransactionComponent } from './operations/details-transaction/details-transaction.component';
import { ConfirmationComponent } from './operations/confirmation/confirmation.component';
import { ToastrModule } from 'ngx-toastr';
import { PersonneMoraleComponent } from './icons/personne-morale/personne-morale.component';
import { PersonnePhysiqueComponent } from './table-list/personne-physique/personne-physique.component';
import { DetailsFatcaComponent } from './fatca/details-fatca/details-fatca.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { HomeComponent } from './security/home/home.component';
import { ProfileComponent } from './security/profile/profile.component';
import { BoardAdminComponent } from './security/board-admin/board-admin.component';
import { BoardModeratorComponent } from './security/board-moderator/board-moderator.component';
import { BoardUserComponent } from './security/board-user/board-user.component';
import { DetailsFatcaPPComponent } from './fatca/details-fatca-pp/details-fatca-pp.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './AuthGarde/AuthGuard.service';
import { AuthService } from './securityServices/auth.service';
import { OperationsDouteusesComponent } from './operations/operations-douteuses/operations-douteuses.component';
import { TraiterOperationComponent } from './operations/traiter-operation/traiter-operation.component';
import { TraiterCompteComponent } from './compte/traiter-compte/traiter-compte.component';
import { TraiterComptePPComponent } from './compte/traiter-compte-pp/traiter-compte-pp.component';

import { AjouterClientComponent } from './ajouter/ajouter-client/ajouter-client.component';
import { ChoixComponent } from './ajouter/choix/choix.component';
import { TransactionsDouteusesDetailsComponent } from './operations/transactions-douteuses-details/transactions-douteuses-details.component';
import { RisqueAnalysePPComponent } from './risque/risque-analyse-pp/risque-analyse-pp.component';

import { NiveauRisqueComponent } from './modeleCotation/niveau-risque/niveau-risque.component';
import { ModeleComponent } from './modeleCotation/modele/modele.component';
import { VisualiserCompteComponent } from './compte/visualiser-compte/visualiser-compte.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeClientComponent } from './liste-client/liste-client.component';



@NgModule({
  imports: [
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    Ng2SearchPipeModule,
	  ToastrModule.forRoot()
    
    
    

   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DetailsComponent,
    RevenuComponent,
    NationaliteComponent,
    PepComponent,
    BeneficiairesEffectifsComponent,
   
    PepPMComponent,
   
    ParenteComponent,
   
    TestComponent,
   
    DetailsPMComponent,
   
    DetailsRisqueComponent,
   
    RisqueComponent,
   
    FatcaComponent,
   
    OperationsComponent,
   
    ListePersonnePhyComponent,
   
    AffichageComponent,
   
    AffichageRisqueComponent,
   
    RisquePersonneMoraleComponent,
   
    CompteComponent,
   
    OuvertureCompteComponent,
   
    TransactionComponent,
   
    TransactionParClientComponent,
   
    DetailsTransactionComponent,
   
    ConfirmationComponent,
   
    PersonneMoraleComponent,
   
    PersonnePhysiqueComponent,
   
    DetailsFatcaComponent,
   
    LoginComponent,
   
    RegisterComponent,
   
    HomeComponent,
   
    ProfileComponent,
   
    BoardAdminComponent,
   
    BoardModeratorComponent,
   
    BoardUserComponent,
   
    DetailsFatcaPPComponent,
   
    OperationsDouteusesComponent,
   
    TraiterOperationComponent,
   
    TraiterCompteComponent,
   
    TraiterComptePPComponent,
   
    
   
    AjouterClientComponent,
   
    
   
    ChoixComponent,
   
    
   
    TransactionsDouteusesDetailsComponent,
   
    
   
    RisqueAnalysePPComponent,
   
    
   

   
    
   
    NiveauRisqueComponent,
   
    
   
    ModeleComponent,
   
    
   
    VisualiserCompteComponent,
                 ListeClientComponent,
   
  ],
  providers: [],
    bootstrap: [AppComponent],
  entryComponents:[RevenuComponent,NationaliteComponent,BeneficiairesEffectifsComponent,PepComponent,PepPMComponent,TraiterOperationComponent,ChoixComponent]
})
export class AppModule { }
