import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
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

  editExperiencia(exp: Experiencia):Observable<any> {
    let params = new HttpParams()
  .set('cargo', exp.cargo)
  .set('empresa', exp.empresa)
  .set('logo', exp.logo)
  .set('a_inicio', exp.a_inicio)
  .set('a_final', exp.a_final)
  .set('descripcion', exp.descripcion);
    return this.http.put(this.apiURL + "editar/" + exp.id_experiencia, params)
  }

}
