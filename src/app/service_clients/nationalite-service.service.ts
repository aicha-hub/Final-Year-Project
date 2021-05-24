import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nationalite } from 'app/client/nationalite';

@Injectable({
  providedIn: 'root'
})
export class NationaliteServiceService {

  constructor(private http:HttpClient) { }
  public CreateN(N:nationalite)
  { return this.http.post("http://localhost:9090/nationalite/Create",N,{responseType:'text' as 'json'})}

  public getNs()
  {return this.http.get("http://localhost:9090/nationalite/GetAll")}

  public deleteN(id:number)
  {return this.http.delete("http://localhost:9090/nationalite/Delete/"+id,{responseType:'text' as 'json'})
}
  public updateN(id:number, N:nationalite)
  {
    return this.http.put("http://localhost:9090/nationalite/Update/"+id,N,{responseType:'text' as 'json'})
  }

  public getN(id:number)
  {return this.http.get("http://localhost:9090/nationalite/Get/"+id)}
}
