import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skills } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private publicApiURL = "https://arcane-shore-42736.herokuapp.com/public/traer/skills";
  private apiURL = "https://arcane-shore-42736.herokuapp.com/api/skills/";

  constructor(private http: HttpClient) { }

  getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.publicApiURL);
  }

  deleteSkill(skill: Skills):Observable<any> {
    return this.http.delete(this.apiURL + "borrar/" + skill.id_skills);
  }

  createSkill(skill: any):Observable<any> {
    return this.http.post(this.apiURL + "crear", skill);
  }

  editSkill(skill: Skills):Observable<any> {
    let params = new HttpParams()
  .set('skill', skill.skill)
  .set('tipo', skill.tipo)
  .set('maestria', skill.maestria)
  .set('logo', skill.logo);
    return this.http.put(this.apiURL + "editar/" + skill.id_skills, params)
  }

}
