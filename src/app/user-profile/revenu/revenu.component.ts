import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { revenu } from 'app/client/revenu';
import { RevenuService } from 'app/service_clients/revenu.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {
  revenu :revenu =new revenu();
  message:any;
  id:number;
  constructor(@Inject(MAT_DIALOG_DATA) public data1, private service:RevenuService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<RevenuComponent>) { }

  ngOnInit(): void {                                                                                                    
    this.id=this.data1.Code_clt;
    this.revenu.persPhy=this.id;
    
  }


  OnCreate ()
  {let snackBarRef = this.snackBar.open('Les revenus sont ajoutés!', 'Bravo', {
    duration: 3000
  });
  
  let resp= this.service.CreateR(this.revenu);
     resp.subscribe((data)=>this.message=data);
     this.dialogRef.close();
  }

  Close()
  {this.dialogRef.close();}

}
