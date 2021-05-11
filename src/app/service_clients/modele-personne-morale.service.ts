import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelePersonneMoraleService {

  constructor(private http:HttpClient) { }

  public getModele(id:number)
  {return this.http.get("http://localhost:9090/modelePersonneMorale/Get/"+id)}

  


}
