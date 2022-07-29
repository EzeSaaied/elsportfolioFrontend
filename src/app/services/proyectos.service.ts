import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Proyectos } from '../interfaces/proyectos.interface'

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private publicApiURL = "http://localhost:8080/public/traer/proyectos";
  private apiURL = "http://localhost:8080/api/proyectos/";

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
}
