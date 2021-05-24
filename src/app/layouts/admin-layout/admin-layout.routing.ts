import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DetailsComponent } from 'app/table-list/details/details.component';
import { TestComponent } from 'app/test/test.component';
import { DetailsPMComponent } from 'app/icons/details-pm/details-pm.component';
import { DetailsRisqueComponent } from 'app/icons/details-risque/details-risque.component';
import { RisqueComponent } from 'app/table-list/risque/risque.component';
import { OperationsComponent } from 'app/operations/operations.component';
import { ListePersonnePhyComponent } from 'app/table-list/liste-personne-phy/liste-personne-phy.component';
import { AffichageComponent } from 'app/fatca/affichage/affichage.component';
import { AffichageRisqueComponent } from 'app/risque/affichage-risque/affichage-risque.component';
import { RisquePersonneMoraleComponent } from 'app/risque/risque-personne-morale/risque-personne-morale.component';
import { FatcaComponent } from 'app/fatca/fatca.component';
import { CompteComponent } from 'app/compte/compte.component';
import { OuvertureCompteComponent } from 'app/compte/ouverture-compte/ouverture-compte.component';
import { TransactionComponent } from 'app/operations/transaction/transaction.component';
import { TransactionParClientComponent } from 'app/operations/transaction-par-client/transaction-par-client.component';
import { DetailsTransactionComponent } from 'app/operations/details-transaction/details-transaction.component';
import { PersonneMoraleComponent } from 'app/icons/personne-morale/personne-morale.component';
import { PersonnePhysiqueComponent } from 'app/table-list/personne-physique/personne-physique.component';
import { DetailsFatcaComponent } from 'app/fatca/details-fatca/details-fatca.component';
import { HomeComponent } from 'app/security/home/home.component';
import { LoginComponent } from 'app/security/login/login.component';
import { RegisterComponent } from 'app/security/register/register.component';
import { ProfileComponent } from 'app/security/profile/profile.component';
import { BoardUserComponent } from 'app/security/board-user/board-user.component';
import { BoardModeratorComponent } from 'app/security/board-moderator/board-moderator.component';
import { BoardAdminComponent } from 'app/security/board-admin/board-admin.component';
import { AuthGuardService } from 'app/AuthGarde/AuthGuard.service';
import { OperationsDouteusesComponent } from 'app/operations/operations-douteuses/operations-douteuses.component';
import { TraiterCompteComponent } from 'app/compte/traiter-compte/traiter-compte.component';
import { TraiterComptePPComponent } from 'app/compte/traiter-compte-pp/traiter-compte-pp.component';
import { TraiterOperationComponent } from 'app/operations/traiter-operation/traiter-operation.component';
import { AjouterClientComponent } from 'app/ajouter/ajouter-client/ajouter-client.component';
import { DetailsFatcaPPComponent } from 'app/fatca/details-fatca-pp/details-fatca-pp.component';
import { TransactionsDouteusesDetailsComponent } from 'app/operations/transactions-douteuses-details/transactions-douteuses-details.component';
import { RisqueAnalysePPComponent } from 'app/risque/risque-analyse-pp/risque-analyse-pp.component';
import { ModeleComponent } from 'app/modeleCotation/modele/modele.component';
import { NiveauRisqueComponent } from 'app/modeleCotation/niveau-risque/niveau-risque.component';
import { VisualiserCompteComponent } from 'app/compte/visualiser-compte/visualiser-compte.component';
import { ListeClientComponent } from 'app/liste-client/liste-client.component';
import { ListeClientMoralComponent } from 'app/liste-client/liste-client-moral/liste-client-moral.component';
import { ModifierComponent } from 'app/icons/modifier/modifier.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'clientsMorales',          component:ListeClientMoralComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path:'test/:id',             component: TestComponent },
    { path:'details/:id',          component: DetailsComponent },
    { path:'detailsClientMorale/:id',          component:DetailsPMComponent },
    { path:'risqueClientMorale/:id', component:DetailsRisqueComponent},
    {path:'risqueClientPhysique/:id',component:RisqueComponent},
    {path:'operations', component:OperationsComponent},
    {path:'clientsPhysiques', component:ListePersonnePhyComponent},
    {path:'fatca', component:AffichageComponent},
    {path:'risqueClientPhysique',component:AffichageRisqueComponent},
    {path:'risqueClientMorale', component:RisquePersonneMoraleComponent},
    {path:'compte',component:CompteComponent},
    {path:'ouvertureCompte/:id',component:OuvertureCompteComponent},
    {path:'listeTransactions', component: TransactionComponent},
    {path:'transactionsClient/:id',component:TransactionParClientComponent},
    {path:'detailsTransaction/:id',component:DetailsTransactionComponent},
    {path: 'clientMoral/:id', component:PersonneMoraleComponent},
    {path:'clientPhysique/:id',component:PersonnePhysiqueComponent},
    {path:'detailsFatca/:id', component:DetailsFatcaComponent},
    {path:'detailsFatcaPersonnePhysique/:id', component:DetailsFatcaPPComponent},
    {path:'detailsDouteuseTransaction/:id', component:TransactionsDouteusesDetailsComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'ajouterUtilisateur', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'user', component: BoardUserComponent },
    { path: 'mod', component: BoardModeratorComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path:'listeTransactionsDouteuses', component:OperationsDouteusesComponent},
    {path:'traiterTransaction/:id', component:TraiterOperationComponent},
    {path:'traiterCompteClientMoral/:id', component:TraiterCompteComponent},
    {path:'traiterCompteClientPhysique/:id', component:TraiterComptePPComponent},
    {path:'ajouter', component:AjouterClientComponent},  
    {path:'risqueAnalysePP/:id', component:RisqueAnalysePPComponent},
    {path:'modeleCotationDeRisque', component:ModeleComponent},
    {path:'niveauRisque',component: NiveauRisqueComponent},
    {path:'visualiserCompte',component:VisualiserCompteComponent},
    {path:'visualiserCompte',component:VisualiserCompteComponent},
    {path:'listeClient',component:ListeClientComponent},

    {path:'modifier/:id',component:ModifierComponent}


    
];
