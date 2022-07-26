import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills.interface'

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {

  @Input() skill!: Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
