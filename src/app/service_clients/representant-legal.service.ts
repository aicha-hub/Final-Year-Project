import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { representant_legal } from 'app/client/representant_legal';

@Injectable({
  providedIn: 'root'
})
export class RepresentantLegalService {

  constructor(private http:HttpClient) { }
  public CreateRL(RL:representant_legal)
  { return this.http.post("http://localhost:9090/representantLegal/Create",RL,{responseType:'text' as 'json'})}

  public getRLs()
  {return this.http.get("http://localhost:9090/representantLegal/GetAll")}

  public deleteRL(id:number)
  {return this.http.delete("http://localhost:9090/representantLegal/Delete/"+id,{responseType:'text' as 'json'})
}
  public updateRL(id:number, RL:representant_legal)
  {
    return this.http.put("http://localhost:9090/representantLegal/Update/"+id,RL,{responseType:'text' as 'json'})
  }

  public getRL(id:number)
  {return this.http.get("http://localhost:9090/representantLegal/Get/"+id,{responseType:'text' as 'json'})}

  public getRepresentant(id:number)
  {
    return this.http.get("http://localhost:9090/representantLegal/GetRepresentant/"+id)
  }
}
