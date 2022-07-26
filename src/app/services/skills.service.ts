import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skills } from '../interfaces/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiURL = "http://localhost:8080/skills/traer"
  constructor(private http: HttpClient) { }

  getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.apiURL);
  }
}
