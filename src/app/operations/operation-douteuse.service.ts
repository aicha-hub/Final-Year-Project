import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OperationDouteuseService {
  constructor(private http:HttpClient) { }
  public getRisqueTransaction(id : number )
  {return this.http.get("http://localhost:9090/RisqueTransaction/GetRisqueTransaction/"+id)}
}

