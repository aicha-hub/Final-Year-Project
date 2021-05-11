import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-details-fatca-pp',
  templateUrl: './details-fatca-pp.component.html',
  styleUrls: ['./details-fatca-pp.component.css']
})
export class DetailsFatcaPPComponent implements OnInit {

  personne_physique: any ; 
  id : number ; 

  constructor(@Inject(MAT_DIALOG_DATA) public data1 , public dialogRef: MatDialogRef<DetailsFatcaPPComponent>,private service : PersonnePhysiqueService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personne_physique=new personne_physique();
    this.service.getPP(this.data1.personne_physique.codeClient).subscribe(data => {
      console.log(data)
      this.personne_physique = data;
    }, error => console.log(error));}

    close(): void{
      this.dialogRef.close();
    
  }


}
