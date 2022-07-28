import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/interfaces/skills.interface';
import { SkillsService } from '../../services/skills.service'
import { tap } from "rxjs/operators"

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() 

  skills: Skills[] = [];

  constructor(private skillsSvc: SkillsService) {}

  ngOnInit(): void {
    this.skillsSvc.getSkills()
    .pipe(
      tap( skills => this.skills = skills)
    )
    .subscribe();
  }

  deleteSkill(skill: Skills){
    console.log(skill + "SKILL COMPONENT");
    this.skillsSvc.deleteSkill(skill).subscribe(
      () => (this.skills = this.skills.filter( s => s.id_skills !== skill.id_skills)));
  }

}
