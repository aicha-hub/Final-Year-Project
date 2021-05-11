import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parente } from 'app/client/parente';

@Injectable({
  providedIn: 'root'
})
export class ParenteService {

  constructor(private http:HttpClient) { }
  

  public CreateNAT(PP:parente)
  { return this.http.post("http://localhost:9090/parente/Create",PP,{responseType:'text' as 'json'})}

  public getPPS()
  {return this.http.get("http://localhost:9090/parente/GetAll")}

  public deletePP(id:number)
  {return this.http.delete("http://localhost:9090/parente/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePP(id:number, PP:parente)
  {
    return this.http.put("http://localhost:9090/parente/Update/"+id,PP,{responseType:'text' as 'json'})
  }

  public getPP(id:number)
  {return this.http.get("http://localhost:9090/parente/Get/"+id,{responseType:'text' as 'json'})}
}


