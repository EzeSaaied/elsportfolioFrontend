import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estudios } from '../interfaces/estudios.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private publicApiURL = "http://localhost:8080/public/traer/estudios";
  private apiURL = "http://localhost:8080/api/estudios/";

  constructor(private http: HttpClient) { }

  getEstudios():Observable<Estudios[]>{
    return this.http.get<Estudios[]>(this.publicApiURL);
  }

  deleteEstudio(estudio: Estudios):Observable<any> {
    return this.http.delete(this.apiURL + "borrar/" + estudio.id_estudios);
  }

  createEstudio(estudio: any):Observable<any> {
    return this.http.post(this.apiURL + "crear", estudio);
  }

  updateEstudio(estudio: Estudios): Observable<Estudios> {
    return this.http.put<Estudios>(this.apiURL + "editar/" + estudio.id_estudios, estudio)
  }
}
