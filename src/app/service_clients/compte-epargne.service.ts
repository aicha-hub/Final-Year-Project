import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compte } from 'app/compte/compte';
import { compteEpargne } from 'app/compte/compteEpargne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteEpargneService {

  constructor(private http:HttpClient) { }

  
  public CreatePM(c :compteEpargne, id:number)
  { return this.http.post("http://localhost:9090/compteEpargne/CreateCompteClientMoral/"+id,c,{responseType:'text' as 'json'})}
  

  public CreatePP(c :compteEpargne, id:number)
  { return this.http.post("http://localhost:9090/compteEpargne/CreateCompteClientPhysique/"+id,c,{responseType:'text' as 'json'})}

  public getCompteCC() :Observable<any>
  {return this.http.get("http://localhost:9090/compte/GetAllCC")}

  public getCompteCE() :Observable<any>
  {return this.http.get("http://localhost:9090/compte/GetAllCE")}

  public getCompte( id:number) :Observable<any>
  {return this.http.get("http://localhost:9090/compte/Get/"+id)}
}
