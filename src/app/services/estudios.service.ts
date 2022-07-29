import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
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

  editEstudio(estudio: Estudios):Observable<any> {
    let params = new HttpParams()
  .set('titulo', estudio.titulo)
  .set('institucion', estudio.institucion)
  .set('logo', estudio.logo)
  .set('aInicio', estudio.aInicio)
  .set('aFinal', estudio.aFinal)
  .set('descripcion', estudio.descripcion)
  .set('certificado', estudio.certificado);
    return this.http.put(this.apiURL + "editar/" + estudio.id_estudios, params)
  }

}
