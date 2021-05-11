import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { personne_morale } from 'app/client/personne_morale';
import { justificatif } from 'app/fatca/justificatif';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneMoraleServiceService {

  constructor(private http:HttpClient) { }
  public CreatePM(PM:personne_morale)
  { 
    return this.http.post("http://localhost:9090/personneMorale/Create",PM,{responseType:'text' as 'json'})
     
     }
 /* public getByEmail(email:string)
  {
     return this.http.get("http://localhost:9090/personneMorale/GetPersonneMoraleEmail/"+email,{responseType:'text' as 'json'})
     }*/

  public getPMS()
  {return this.http.get("http://localhost:9090/personneMorale/GetAll")}

  public getPMFatca()
  {return this.http.get("http://localhost:9090/personneMorale/Fatca")}

  public deletePM(id:number)
  {return this.http.delete("http://localhost:9090/personneMorale/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePM(id:number, PM:personne_morale)
  {
    return this.http.put("http://localhost:9090/personneMorale/Update/"+id,PM,{responseType:'text' as 'json'})
  }

  public getPM(id:number)
  {return this.http.get("http://localhost:9090/personneMorale/Get/"+id)}

  public risque(id:number)
  {
    return this.http.get("http://localhost:9090/personneMorale/risque/"+id)
  }

  public getRisqueFaiblementEleve()
  {return this.http.get("http://localhost:9090/personneMorale/RisqueFaiblementEleve")}

  public getRisqueMoyennementEleve()
  {return this.http.get("http://localhost:9090/personneMorale/RisqueMoyennementEleve")}

  public getRisqueFaible()
  {return this.http.get("http://localhost:9090/personneMorale/RisqueFaible")}

  public getRisqueEleve()
  {return this.http.get("http://localhost:9090/personneMorale/RisqueEleve")}


  public getDossiersRisqueFaible()
{return this.http.get("http://localhost:9090/personneMorale/DossiersRisqueFaible")}


public getDossiersRisqueMEMF()
{return this.http.get("http://localhost:9090/personneMorale/DossiersRisqueMoyennementFaibleouMoyennementEleve")}

public getDossiersRisqueE()
{return this.http.get("http://localhost:9090/personneMorale/DossiersRisqueEleve")}


AddDocument(justificatif:justificatif,file:File):Observable<any>{

  const formData: FormData = new FormData();

  formData.append('nom',justificatif.nom);
  formData.append('dateDeCreation',justificatif.dateCreation);
  formData.append('type',file.type);
  formData.append('file',file);

  const req = new HttpRequest('POST', "http://localhost:9090/personneMorale/Add", formData, {
    reportProgress: true,
    responseType: 'json',
  });

  return this.http.request(req);
}

form: FormGroup = new FormGroup({
  codeClient : new FormControl(0,Validators.required),
  denominationSociale: new FormControl('', Validators.required),
  formeJuridique: new FormControl('', Validators.required),
  objetSocial : new FormControl('', Validators.required),
  email: new FormControl('', Validators.email),
  contact: new FormControl('', [Validators.required, Validators.minLength(8)]),
  paysResidence: new FormControl('', Validators.required),
  
  //paysConstitution: new FormControl('', Validators.required),
  //department: new FormControl(0),
  dateConstitution: new FormControl(''),
  adresse: new FormControl('', Validators.required),
 
  //isPermanent: new FormControl(false)
});



  
}
