import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skills } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private publicApiURL = "http://localhost:8080/public/traer/skills";
  private apiURL = "http://localhost:8080/api/skills/";

  constructor(private http: HttpClient) { }

  getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.publicApiURL);
  }
}
