import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compteCourant } from 'app/compte/compteCourant';

@Injectable({
  providedIn: 'root'
})
export class CompteCourantService {

  constructor(private http:HttpClient) { }
  public CreatePM(c :compteCourant, id:number)
  { return this.http.post("http://localhost:9090/compteCourant/CreateCompteClientMoral/"+id,c,{responseType:'text' as 'json'})}
  

  public CreatePP(c :compteCourant, id:number)
  { return this.http.post("http://localhost:9090/compteCourant/CreateCompteClientPhysique/"+id,c,{responseType:'text' as 'json'})}

  public getCompte(id:number)
  {return this.http.get("http://localhost:9090/compte/Get/"+id)}
}
