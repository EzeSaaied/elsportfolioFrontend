import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/interfaces/skills.interface';
import { SkillsService } from '../../services/skills.service'
import { tap } from "rxjs/operators"

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private skillsSvc: SkillsService) {}

  ngOnInit(): void {
    this.skillsSvc.getSkills()
    .pipe(
      tap( skills => this.skills = skills)
    )
    .subscribe();
  }

}
