import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/securityServices/auth.service';
import { user } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user : user = new user () ; 
  u : user = new user ;
  roleList: string[] = ['CHEF AGENCE', 'RESPONSABLE CONFORMITE', 'CONSEILLER CLIENTS'];
  
  
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(selected : string): void {
    if (selected=='CHEF AGENCE')
    {this.user.role=['chefAgence']}
    if (selected=='RESPONSABLE CONFORMITE')
    {this.user.role=['res']}
    if (selected=='CONSEILLER CLIENTS')
    {this.user.role=['cons']}
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
