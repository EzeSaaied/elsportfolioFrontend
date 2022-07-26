import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudiosService } from 'src/app/services/estudios.service'

@Component({
  selector: 'app-estudios-form',
  templateUrl: './estudios-form.component.html',
  styleUrls: ['./estudios-form.component.css']
})
export class EstudiosFormComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private estudiosSvc: EstudiosService, private router: Router) {

    this.form = this.formBuilder.group(
      {
        titulo: ["", [Validators.required]],
        institucion: ["", [Validators.required]],
        logo: ["", [Validators.required]],
        a_inicio: [1996, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        a_final: [2022, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        descripcion: ["", [Validators.required]],
        certificado: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Titulo() {
    return this.form.get("titulo")
  }

  get Institucion() {
    return this.form.get("institucion")
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
  
  get Certificado() {
    return this.form.get("certificado")
  }

  onCreate(event: Event) {
    event.preventDefault;
    this.estudiosSvc.createEstudio(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(["/estudios"]);
    })
  })
  }
  }