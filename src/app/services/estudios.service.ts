import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Estudios } from '../interfaces/estudios.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  private apiURL = "http://localhost:8080/estudios/traer";
  constructor(private http: HttpClient) { }

  getEstudios():Observable<Estudios[]>{
    return this.http.get<Estudios[]>(this.apiURL);
  }
}
