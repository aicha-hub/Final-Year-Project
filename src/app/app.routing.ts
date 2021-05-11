import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DetailsComponent } from './table-list/details/details.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuardService } from './AuthGarde/AuthGuard.service';

const routes: Routes =[
  //{path:'login',component:LoginComponent}, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
  
  , {
    path: '',
    component: AdminLayoutComponent, //canActivate: [AuthGuardService],
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  
  

  
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: true,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
