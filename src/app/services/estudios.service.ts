import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estudios } from '../interfaces/estudios.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  private publicApiURL = "https://arcane-shore-42736.herokuapp.com/public/traer/estudios";
  private apiURL = "https://arcane-shore-42736.herokuapp.com/api/estudios/";

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

  editEstudio(estudio: Estudios):Observable<any> {
    let params = new HttpParams()
  .set('titulo', estudio.titulo)
  .set('institucion', estudio.institucion)
  .set('logo', estudio.logo)
  .set('a_inicio', estudio.a_inicio)
  .set('a_final', estudio.a_final)
  .set('descripcion', estudio.descripcion)
  .set('certificado', estudio.certificado);
    return this.http.put(this.apiURL + "editar/" + estudio.id_estudios, params)
  }

}
