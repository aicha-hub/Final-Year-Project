import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modeleCotation } from './modeleCotation';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  constructor(private http:HttpClient) { }
public update(id:number,m: modeleCotation)
{ 
return this.http.put("http://localhost:9090/modeleCotationRisque/Update/"+id,m,{responseType:'text' as 'json'})
}
public get()
{return this.http.get("http://localhost:9090/modeleCotationRisque/GetAll")}
public getModele(id:number)
{return this.http.get("http://localhost:9090/modeleCotationRisque/Get/"+id)}
}
