import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service'

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private skillsSvc: SkillsService, private router: Router) { 

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

  onCreate(event: Event) {
    event.preventDefault;
    this.skillsSvc.createSkill(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(["/skills"]);
    })
  })
  }
  }
