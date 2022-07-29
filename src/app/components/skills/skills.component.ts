import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/interfaces/skills.interface';
import { SkillsService } from '../../services/skills.service';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit { 

  skills: Skills[] = [];

  constructor(private skillsSvc: SkillsService, protected authSvc: AuthService) {}

  ngOnInit(): void {
    this.skillsSvc.getSkills()
    .pipe(
      tap( skills => this.skills = skills)
    )
    .subscribe();
  }

  deleteSkill(skill: Skills){
    this.skillsSvc.deleteSkill(skill)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.skills = this.skills.filter( s => s.id_skills !== skill.id_skills)));
  }

}
