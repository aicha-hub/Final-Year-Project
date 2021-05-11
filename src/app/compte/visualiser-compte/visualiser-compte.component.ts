import { Component, OnInit, ViewChild } from '@angular/core';
import { CompteEpargneService } from 'app/service_clients/compte-epargne.service';
import { compte } from '../compte';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-visualiser-compte',
  templateUrl: './visualiser-compte.component.html',
  styleUrls: ['./visualiser-compte.component.css']
})
export class VisualiserCompteComponent implements OnInit {
  comptes: any;
  dataSource : MatTableDataSource<compte>;
  columnsToDisplay : string[] = ['rib','numCompte','solde','nomAgence','dateOuverture'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:CompteEpargneService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  
  fetchPosts(): void {
   
      let resp=this.service.getCompteCE();
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

    chercher(id : number )
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
    
    } 
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
