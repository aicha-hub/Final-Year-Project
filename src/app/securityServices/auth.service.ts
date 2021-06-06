import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'app/security/user';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
      throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, httpOptions);
  }

  public getUser(nom:string)
  {return this.http.get("http://localhost:9090/api/auth/findUserByUsername/"+nom)}
  public getUsers():Observable<any>
  {return this.http.get("http://localhost:9090/api/auth/GetAll")}
  public deleteUser(nom:String)
  {return this.http.delete("http://localhost:9090/api/auth/DeleteUser/"+nom,{responseType:'text' as 'json'})
}
public updateMotDePasse(nom:String,u:user)
{return this.http.put("http://localhost:9090/api/auth/UpdatePassword/"+nom,u,{responseType:'text' as 'json'})
}
  public updateUser(u:user)
  {
    return this.http.put("http://localhost:9090/api/auth/UpdateUser/",u,{responseType:'text' as 'json'})
  }
}
