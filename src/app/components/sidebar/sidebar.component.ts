import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/tableauxBords', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
  { path: '/listeClient', title: 'Liste clients ',  icon:'list', class: '' },
  { path: '/ajouter', title: 'Ajouter client',  icon:'person_add', class: '' },
  {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
  {path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
  { path: '/compte', title: 'Demande compte',  icon:'credit_score', class: '' },
  {path:'/visualiserCompte', title:'Liste comptes',icon:'account_balance_wallet',class:''},
  { path: '/operations', title: 'Effectuer operation',  icon:'paid', class: '' },
  {path:'/listeTransactions', title:'Liste transactions',icon:'receipt_long',class:''},
  {path:'/listeTransactionsDouteuses', title:'Transactions douteuses',icon:'notification_important',class:''},
  
];

export const ROUTESChef: RouteInfo[] = [

  { path: '/tableauxBords', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
  { path: '/listeClient', title: 'Liste clients ',  icon:'list', class: '' },
  { path: '/ajouter', title: 'Ajouter client',  icon:'person_add', class: '' },
  {path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
  {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
  { path: '/compte', title: 'Demande compte',  icon:'credit_score', class: '' },
  {path:'/visualiserCompte', title:'Liste comptes',icon:'account_balance_wallet',class:''},
  { path: '/operations', title: 'Effectuer operation',  icon:'paid', class: '' },
  {path:'/listeTransactions', title:'Liste transactions',icon:'receipt_long',class:''},
  {path:'/listeTransactionsDouteuses', title:'Transactions douteuses',icon:'notification_important',class:''},
    
 
];

export const ROUTESConseiller: RouteInfo[] = [
  
  { path: '/listeClient', title: 'Liste clients ',  icon:'list', class: '' },
  { path: '/ajouter', title: 'Ajouter client',  icon:'person_add', class: '' },
  {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
  { path: '/compte', title: 'Demande compte',  icon:'credit_score', class: '' },
  {path:'/visualiserCompte', title:'Liste comptes',icon:'account_balance_wallet',class:''},
  { path: '/operations', title: 'Effectuer operation',  icon:'paid', class: '' },
  {path:'/listeTransactions', title:'Liste transactions',icon:'receipt_long',class:''},
 
];

export const ROUTESResponsable: RouteInfo[] = [
  { path: '/tableauxBords', title: 'Dashboard',  icon: 'dashboard', class: '' },
  {path: '/listeClient', title: 'Liste clients ',  icon:'list', class: '' },
  {path:'/risqueClientPhysique', title:'Liste Surveillance',icon:'description',class:''},
  {path:'/fatca', title:'Fatca',icon:'content_paste',class:''},
  { path: '/compte', title: 'Demande compte',  icon:'credit_score', class: '' },
  {path:'/visualiserCompte', title:'Liste comptes',icon:'account_balance_wallet',class:''},
  {path:'/listeTransactions', title:'Liste transactions',icon:'receipt_long',class:''},
  {path:'/listeTransactionsDouteuses', title:'Transactions douteuses',icon:'notification_important',class:''},

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableBoard = false;
  showConseillerBoard= false;
  showChefBoard=false;
  username: string;
  private roles: string[];
  isUser=false ; 
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showResponsableBoard = this.roles.includes('ROLE_RESPONSABLE');
    this.showConseillerBoard = this.roles.includes('CONSEILLER_CLIENTS');
    this.showChefBoard = this.roles.includes('CHEF_AGENCE');
    this.username = user.username;
    }
    if(this.showAdminBoard==true)
    {this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    if(this.showResponsableBoard==true)
    { 
      this.menuItems = ROUTESResponsable.filter(menuItem => menuItem);}
    if(this.showConseillerBoard==true)
    { this.menuItems = ROUTESConseiller.filter(menuItem => menuItem);}
    if(this.showChefBoard==true)
    { 
      this.menuItems = ROUTESChef.filter(menuItem => menuItem);}
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}