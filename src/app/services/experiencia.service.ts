import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Experiencia } from '../interfaces/experiencia.interface'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private publicApiURL = "http://localhost:8080/public/traer/experiencia";
  private apiURL = "http://localhost:8080/api/experiencia/";

  constructor(private http: HttpClient) { }

  getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.publicApiURL);
  }

  deleteExperiencia(experiencia: Experiencia):Observable<any> {
    return this.http.delete(this.apiURL + "borrar/" + experiencia.id_experiencia);
  }

  createExperiencia(experiencia: any):Observable<any> {
    return this.http.post(this.apiURL + "crear", experiencia);
  }

}
