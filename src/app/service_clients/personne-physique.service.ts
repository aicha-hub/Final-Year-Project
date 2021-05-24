import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { personne_physique } from 'app/client/personne_physique';
import { justificatif } from 'app/fatca/justificatif';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonnePhysiqueService {

  constructor(private http:HttpClient) { }
  public CreatePP(PP:personne_physique)
  { return this.http.post("http://localhost:9090/personnePhysique/Create",PP,{responseType:'text' as 'json'})}

  public getPPS()
  {return this.http.get("http://localhost:9090/personnePhysique/GetAll")}

  public getPPFatca()
  {return this.http.get("http://localhost:9090/personnePhysique/Fatca")}

  public deletePP(id:number)
  {return this.http.delete("http://localhost:9090/personnePhysique/Delete/"+id,{responseType:'text' as 'json'})
}
  public updatePP(id:number, PP:personne_physique)
  {
    return this.http.put("http://localhost:9090/personnePhysique/Update/"+id,PP,{responseType:'text' as 'json'})
  }
  public updateMAJ(id:number, PP:personne_physique)
  {
    return this.http.put("http://localhost:9090/personnePhysique/MAJ/"+id,PP,{responseType:'text' as 'json'})
  }
  public getTrouverCompte(id:number)
  {return this.http.get("http://localhost:9090/compte/GetID/"+id)}
  
  public updateP(PP:personne_physique)
  {
    return this.http.put("http://localhost:9090/personnePhysique//miseAjour",PP,{responseType:'text' as 'json'})
  }

  public getPP(id:number)
  {return this.http.get("http://localhost:9090/personnePhysique/Get/"+id)}

  public getDossiers()
{return this.http.get("http://localhost:9090/personnePhysique/Dossiers")}


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Nom: new FormControl('', Validators.required),
    Prenom: new FormControl('', Validators.required),
    Date_naiss: new FormControl('', Validators.required),
    Pays: new FormControl('', Validators.required),
    Sexe: new FormControl('1',Validators.required),
    CIN: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    PaysResidence: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.email),
    

  });

  public getRisqueFaiblementEleve()
  {return this.http.get("http://localhost:9090/personnePhysique/RisqueFaiblementEleve")}

  public getRisqueMoyennementEleve()
  {return this.http.get("http://localhost:9090/personnePhysique/RisqueMoyennementEleve")}

  public getRisqueFaible()
  {return this.http.get("http://localhost:9090/personnePhysique/RisqueFaible")}

  public getRisqueEleve()
  {return this.http.get("http://localhost:9090/personnePhysique/RisqueEleve")}

  public getDossiersRisqueFaible()
{return this.http.get("http://localhost:9090/personnePhysique/DossiersRisqueFaible")}

public getDossiersRisqueMEMF()
{return this.http.get("http://localhost:9090/personnePhysique/DossiersRisqueMoyennementFaibleouMoyennementEleve")}

public getDossiersRisqueE()
{return this.http.get("http://localhost:9090/personnePhysique/DossiersRisqueEleve")}


AddDocument(justificatif:justificatif,file:File):Observable<any>{

  const formData: FormData = new FormData();

  formData.append('nom',justificatif.nom);
  formData.append('dateDeCreation',justificatif.dateCreation);
  formData.append('type',file.type);
  formData.append('file',file);

  const req = new HttpRequest('POST', "http://localhost:9090/fatca/Add", formData, {
    reportProgress: true,
    responseType: 'json',
  });

  return this.http.request(req);
}


}


