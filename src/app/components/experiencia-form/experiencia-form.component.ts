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
      a_inicio: [1996, [Validators.required, Validators.min(1996), Validators.max(2022)]],
      a_final: [2022, [Validators.required, Validators.min(1996), Validators.max(2022)]],
      descripcion: ["", [Validators.required]]
    }
  )
}

ngOnInit(): void {
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

get A_inicio() {
  return this.form.get("a_inicio")
}

get A_final() {
  return this.form.get("a_final")
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
