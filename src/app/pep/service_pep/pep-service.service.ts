import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pep } from 'app/client/pep';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PepServiceService {

  constructor(private http:HttpClient) { }
  public CreatePR(P:pep)
  { return this.http.post("http://localhost:9090/pep/Create",P,{responseType:'text' as 'json'})}

  public getPRs()
  {return this.http.get("http://localhost:9090/pep/GetAll")}

  public deletePR(id:number)
  {return this.http.delete("http://localhost:9090/pep/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePR(id:number,P:pep)
  {
    return this.http.put("http://localhost:9090/pep/Update/"+id,P,{responseType:'text' as 'json'})
  }

  public getPR(id:number)
  {return this.http.get("http://localhost:9090/pep/Get/"+id,{responseType:'text' as 'json'})}

  form: FormGroup = new FormGroup({
  
    fonctionPep: new FormControl('', Validators.required),
    paysPep: new FormControl('', Validators.required),
    CIN: new FormControl('', [Validators.required, Validators.maxLength(8)]),
   
  });

  initializeFormGroup() {
    this.form.setValue({
      
      fonctionPep: '',
      paysPep: '',
      CIN: '',
      
    });
  }
}
