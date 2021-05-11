import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { matFormFieldAnimations, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'

import { MatSortModule } from '@angular/material/sort';
import { MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips'



const MaterialComponents=[
  MatPaginatorModule,
  MatSnackBarModule,
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatOptionModule,
  MatSelectModule,
  MatPseudoCheckboxModule,
  MatChipsModule,
  
  
  
 
  

]

@NgModule({
  
  imports: [
    MaterialComponents,
    
  ],
  exports:[MaterialComponents,]
})
export class MaterialModule { }
