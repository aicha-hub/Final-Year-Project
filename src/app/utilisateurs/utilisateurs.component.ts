import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { user } from '../security/user';
import { AuthService } from '../securityServices/auth.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  comptes: any;
  dataSource : MatTableDataSource<user>;
  message:any;
  columnsToDisplay : string[] = ['Nom utilisateur','Email','Role','updateAction','deleteAction'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:AuthService , private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  fetchPosts(): void {
   
      let resp=this.service.getUsers();
      resp.subscribe(
        response => {
          this.comptes = response;
          console.log(response);
          this.dataSource = new MatTableDataSource(response); 
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log(error);
        });
 
    
            
    }

    delete(nom:String)
    { let resp= this.service.deleteUser(nom);
      resp.subscribe((data)=> {
        console.log(data);
        this.fetchPosts();
      },
      error => console.log(error));

      let snackBarRef = this.snackBar.open('utilisateur supprimé avec succès!', 'Succès', {
        duration: 3000
      });

    }

    update(u:user)
    {
      let resp= this.service.updateUser(u);
      resp.subscribe((data)=>this.message=data); 

      let snackBarRef = this.snackBar.open('Les données sont mis à jour avec succès!', 'Succès', {
        duration: 3000
      });
    }


    Ajouter()
    {
      this.router.navigate(['/ajouterUtilisateur'])
    }

    /*chercher(id : number )
    {

      let resp=this.service.getCompte(id);
      resp.subscribe(
        response => {
          this.comptes = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
    
    } */
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
