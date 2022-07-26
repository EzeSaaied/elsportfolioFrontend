import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Experiencia } from '../interfaces/experiencia.interface'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiURL = "http://localhost:8080/experiencia/traer";
  constructor(private http: HttpClient) { }

  getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiURL);
  }
}
