import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelePersonnePhysiqueService {

  constructor(private http:HttpClient) { }

  public getModele(id:number)
  {return this.http.get("http://localhost:9090/modelePersonnePhysique/Get/"+id)}

  public getTrouverCompte(id:number)
  {return this.http.get("http://localhost:9090/compte/GetID/"+id)}
}
