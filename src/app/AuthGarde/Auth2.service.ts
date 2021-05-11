import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenStorageService } from "app/securityServices/token-storage.service";

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,public l:TokenStorageService) {}
  // ...
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem(this.l.getToken());
    console.log(this.l.getToken())
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(this.l.getToken());
  }
}