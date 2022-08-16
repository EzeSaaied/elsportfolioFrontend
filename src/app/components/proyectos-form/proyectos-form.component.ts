import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service'

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private proyectosSvc: ProyectosService, private router: Router) {

    this.form = this.formBuilder.group(
      {
        nombre: ["", [Validators.required]],
        descripcion: ["", [Validators.required]],
        a_inicio: [1996, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        a_final: [2022, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        url: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Nombre() {
    return this.form.get("nombre")
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  get A_inicio() {
    return this.form.get("a_inicio")
  }

  get A_final() {
    return this.form.get("a_final")
  }

  get Url() {
    return this.form.get("url")
  }

  onCreate(event: Event) {
    event.preventDefault;
    this.proyectosSvc.createProyecto(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(["/proyectos"]);
    })
  })
  }
  }
