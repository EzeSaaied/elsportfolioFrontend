import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  @Input() skill!: Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
