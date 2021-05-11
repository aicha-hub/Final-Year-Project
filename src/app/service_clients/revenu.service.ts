import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { revenu } from 'app/client/revenu';

@Injectable({
  providedIn: 'root'
})
export class RevenuService {

  constructor(private http:HttpClient) { }
  public CreateR(R:revenu)
  { return this.http.post("http://localhost:9090/revenu/Create",R,{responseType:'text' as 'json'})}

  public getRs()
  {return this.http.get("http://localhost:9090/revenu/GetAll")}

  public deleteR(id:number)
  {return this.http.delete("http://localhost:9090/revenu/Delete/"+id,{responseType:'text' as 'json'})
}
  public updateR(id:number, R:revenu)
  {
    return this.http.put("http://localhost:9090/revenu/Update/"+id,R,{responseType:'text' as 'json'})
  }

  public getR(id:number)
  {return this.http.get("http://localhost:9090/revenu/Get/"+id,{responseType:'text' as 'json'})}

  /*form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    RevenuMensuelNet: new FormControl('', Validators.required),
    Devise: new FormControl('', Validators.required),
    
    
  });*/
}
