import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persNat } from 'app/client/persNat';

@Injectable({
  providedIn: 'root'
})
export class PersNatService {

  constructor(private http:HttpClient) { }
  public CreatePP(PP:persNat)
  { return this.http.post("http://localhost:9090/persNat/Create",PP,{responseType:'text' as 'json'})}

  public getPPS()
  {return this.http.get("http://localhost:9090/persNat/GetAll")}

  public deletePP(id:number)
  {return this.http.delete("http://localhost:8080/persNat/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePP(id:number, PP:persNat)
  {
    return this.http.put("http://localhost:9090/persNat/Update/"+id,PP,{responseType:'text' as 'json'})
  }

  public getPP(id:number)
  {return this.http.get("http://localhost:9090/persNat/Get/"+id,{responseType:'text' as 'json'})}

}
