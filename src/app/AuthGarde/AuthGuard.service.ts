import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./Auth2.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated() ) {
      this.router.navigate(['']);
      console.log(this.auth.isAuthenticated())
      return false;
    }

    return true;
  }
}