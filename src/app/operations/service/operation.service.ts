import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { transaction } from '../transaction';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient) { }

  public createTransaction(t:transaction)
  { return this.http.post("http://localhost:9090/transaction/Create",t,{responseType:'text' as 'json'})}

  public getTransaction()
  {return this.http.get("http://localhost:9090/transaction/GetAll")}

  public getRisqueTransaction()
  {return this.http.get("http://localhost:9090/RisqueTransaction/Get")}

  public getTransactionClient(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAll/"+id)}

  public getTransactionClientDouteuse(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllDD/"+id)}

  public getTransactionClientDouteuseValidee(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllDV/"+id)}

  public getTrouverCompte(id:number)
  {return this.http.get("http://localhost:9090/compte/GetID/"+id)}

  public getTransactionClientValidee(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllV/"+id)}

  public getTransactionClientRefuse(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllR/"+id)}

  public deleteTransaction(id:number)
  {return this.http.delete("http://localhost:9090/transaction/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePP(id:number, t:transaction)
  {
    return this.http.put("http://localhost:9090/transaction/Update/"+id,t,{responseType:'text' as 'json'})
  }

  public getPP(id:number)
  {return this.http.get("http://localhost:9090/transaction/Get/"+id)}


  public getPPT(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetT/"+id)}
  public virement(t:transaction)
  { return this.http.post("http://localhost:9090/transaction/Virement",t,{responseType:'text' as 'json'})}
  
  public prelevement(t:transaction)
  { return this.http.post("http://localhost:9090/transaction/Prelevement",t,{responseType:'text' as 'json'})}
  
  
  public versement(t:transaction)
  { return this.http.post("http://localhost:9090/transaction/Versement",t,{responseType:'text' as 'json'})}

  public test ()
  {
    let ekhdem=this.http.get("http://localhost:9090/transaction/GetTest");
    return ekhdem;
  }

  public GetTransactionDouteuses():Observable<any>
  {
    return this.http.get("http://localhost:9090/transaction/GetTransactionDouteuses");
  }

  public sendEmail(id:number)
  {return this.http.get("http://localhost:9090/transaction/sendEmail/"+id);

  }

}
