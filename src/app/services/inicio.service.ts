import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Inicio } from '../interfaces/inicio.interface';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private publicApiURL = "https://arcane-shore-42736.herokuapp.com/public/traer/inicio";
  private apiURL = "https://arcane-shore-42736.herokuapp.com/api/inicio/";

  constructor(private http: HttpClient) { }

  getInicio():Observable<Inicio[]>{
    return this.http.get<Inicio[]>(this.publicApiURL);
  }

  editInicio(inicio: Inicio):Observable<any> {
    let params = new HttpParams()
  .set('profilepic', inicio.profilepic)
  .set('titulo', inicio.titulo)
  .set('aboutme', inicio.aboutme)
    return this.http.put(this.apiURL + "editar/" + inicio.id_inicio, params)
  }

}
