import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service'

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private experienciaSvc: ExperienciaService, private router: Router) {

  this.form = this.formBuilder.group(
    {
      cargo: ["", [Validators.required]],
      empresa: ["", [Validators.required]],
      logo: ["", [Validators.required]],
      aInicio: [0, [Validators.required]],
      aFinal: [0, [Validators.required]],
      descripcion: ["", [Validators.required]]
    }
  )
}

ngOnInit(): void {
  this.form.valueChanges.subscribe(console.log);
}

get Cargo() {
  return this.form.get("cargo")
}

get Empresa() {
  return this.form.get("empresa")
}

get Logo() {
  return this.form.get("logo")
}

get AInicio() {
  return this.form.get("aInicio")
}

get AFinal() {
  return this.form.get("aFinal")
}

get Descripcion() {
  return this.form.get("descripcion")
}

onCreate(event: Event) {
  event.preventDefault;
  this.experienciaSvc.createExperiencia(this.form.value).subscribe(data => {
    console.log(JSON.stringify(data));
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/experiencia"]);
  })
})
}
}
