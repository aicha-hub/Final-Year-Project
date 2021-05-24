import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { beneficaire_effectif } from 'app/client/beneficiaire_effectif';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireEffectifServiceService {

 
  constructor(private http:HttpClient) { }
  public CreatePR(BF:beneficaire_effectif)
  { return this.http.post("http://localhost:9090/beneficiaireEffectif/Create",BF,{responseType:'text' as 'json'})}

  public getPRs()
  {return this.http.get("http://localhost:9090/beneficiaireEffectif/GetAll")}

  public deletePR(id:number)
  {return this.http.delete("http://localhost:9090/beneficiaireEffectif/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePR(id:number,BF:beneficaire_effectif)
  {
    return this.http.put("http://localhost:9090/beneficiaireEffectif/Update/"+id,BF,{responseType:'text' as 'json'})
  }

  public getPR(id:number)
  {return this.http.get("http://localhost:9090/beneficiaireEffectif/Get/"+id,{responseType:'text' as 'json'})}


  public getBeneficiaire1(id:number)
  {
    return this.http.get("http://localhost:9090/beneficiaireEffectif/GetBeneficiaire1/"+id)
  }
  public getBeneficiaire2(id:number)
  {
    return this.http.get("http://localhost:9090/beneficiaireEffectif/GetBeneficiaire2/"+id)
  }
  public getBeneficiaire3(id:number)
  {
    return this.http.get("http://localhost:9090/beneficiaireEffectif/GetBeneficiaire3/"+id)
  }
 

  public getBeneficiaire(id:number)
  {
    return this.http.get("http://localhost:9090/beneficiaireEffectif/GetBeneficiaire/"+id)
  }

  

  




  form: FormGroup = new FormGroup({
  
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    CIN: new FormControl(0, Validators.required),
    paysResidence: new FormControl('', Validators.required),
    pourcentage: new FormControl('', Validators.required),
    numPassport:new FormControl(0)
   
  });
   
  

  initializeFormGroup() {
    this.form.setValue({
      
      nom: '',
      prenom: '',
      CIN: 0,
      paysResidence:'',
      pourcentage:'',
      
    });
  }
}
