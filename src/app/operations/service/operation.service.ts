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


  public getNbre()
  {return this.http.get("http://localhost:9090/transaction/GetAllTranMois")}

  public getcmp()
  {return this.http.get("http://localhost:9090/transaction/GetAllCompte")}

  public getType()
  {return this.http.get("http://localhost:9090/transaction/GetAllType")}
  public getJanvier()
  {return this.http.get("http://localhost:9090/transaction/GetAllJanvier")}
  public getFeverier()
  {return this.http.get("http://localhost:9090/transaction/GetAllfeverier")}
  public getJuin()
  {return this.http.get("http://localhost:9090/transaction/GetAllJuin")}
  public getMars()
  {return this.http.get("http://localhost:9090/transaction/GetAllMars")}
  public getAvril()
  {return this.http.get("http://localhost:9090/transaction/GetAllAvril")}
  public getMai()
  {return this.http.get("http://localhost:9090/transaction/GetAllMai")}
  public getjuillet()
  {return this.http.get("http://localhost:9090/transaction/GetAllJuillet")}
  public getDN()
  {return this.http.get("http://localhost:9090/transaction/GetAllDN")}

  public getRisqueTransaction()
  {return this.http.get("http://localhost:9090/RisqueTransaction/Get")}

  public getTransactionClient(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAll/"+id)}

  public getTransactionClt(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetNbre/"+id)}

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
  public getAnalyse(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllAnalyse/"+id)}

  public getAnalyseDate(id:number)
  {return this.http.get("http://localhost:9090/transaction/GetAllAnalyseDate/"+id)}

  public deleteTransaction(id:number)
  {return this.http.delete("http://localhost:9090/transaction/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePP(id:number, t:transaction)
  {
    return this.http.put("http://localhost:9090/transaction/Update/"+id,t,{responseType:'text' as 'json'})
  }
  public traiterPP(id:number, t:transaction)
  {
    return this.http.put("http://localhost:9090/transaction/Traiter/"+id,t,{responseType:'text' as 'json'})
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

  public GetTransactionD():Observable<any>
  {
    return this.http.get("http://localhost:9090/transaction/GetAllD");
  }

  public sendEmail(id:number)
  {return this.http.get("http://localhost:9090/transaction/sendEmail/"+id);

  }

}
