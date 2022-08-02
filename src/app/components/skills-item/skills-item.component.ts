import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from '../../interfaces/skills.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  form: FormGroup;

  editSkillButton = false;

  @Input() skill!: Skills;
  @Output() onDeleteSkill: EventEmitter<Skills> = new EventEmitter();
  @Output() onEditSkill: EventEmitter<Skills> = new EventEmitter();

  constructor( private formBuilder: FormBuilder, protected authSvc: AuthService) {

  this.form = this.formBuilder.group(
    {
      skill: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      maestria: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      logo: ["", [Validators.required]]
    }
  )
}

ngOnInit(): void {
}

onDelete(skill: Skills) {
  if(confirm("Seguro que desea borrar " + this.skill.skill + "?")){
  this.onDeleteSkill.emit(skill);}
}

get Skill() {
  return this.form.get("skill")
}

get Tipo() {
  return this.form.get("tipo")
}

get Maestria() {
  return this.form.get("maestria")
}

get Logo() {
  return this.form.get("logo")
}

onEdit(skill: Skills) {
  this.onEditSkill.emit(skill);
  this.editSkillButton = !this.editSkillButton;
}

onToggleEdit() {
  this.editSkillButton = !this.editSkillButton;
}

}
