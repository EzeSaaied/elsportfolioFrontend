import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Proyectos } from '../interfaces/proyectos.interface'

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private publicApiURL = "https://arcane-shore-42736.herokuapp.com/public/traer/proyectos";
  private apiURL = "https://arcane-shore-42736.herokuapp.com/api/proyectos/";

  constructor(private http: HttpClient) { }

  getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.publicApiURL);
  }

  deleteProyecto(proyecto: Proyectos):Observable<any> {
    return this.http.delete(this.apiURL + "borrar/" + proyecto.id_proyectos);
  }

  createProyecto(proyecto: any):Observable<any> {
    return this.http.post(this.apiURL + "crear", proyecto);
  }

  editProyecto(proyecto: Proyectos):Observable<any> {
    let params = new HttpParams()
  .set('nombre', proyecto.nombre)
  .set('descripcion', proyecto.descripcion)
  .set('a_inicio', proyecto.a_inicio)
  .set('a_final', proyecto.a_final)
  .set('url', proyecto.url);
    return this.http.put(this.apiURL + "editar/" + proyecto.id_proyectos, params)
  }

}
