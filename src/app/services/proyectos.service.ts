import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Proyectos } from '../interfaces/proyectos.interface'

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiURL = "http://localhost:8080/proyectos/traer";
  constructor(private http: HttpClient) { }

  getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.apiURL);
  }
}
