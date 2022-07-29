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
        aInicio: [0, [Validators.required]],
        aFinal: [0, [Validators.required]],
        url: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }

  get Nombre() {
    return this.form.get("nombre")
  }

  get Descripcion() {
    return this.form.get("descripcion")
  }

  get AInicio() {
    return this.form.get("aInicio")
  }

  get AFinal() {
    return this.form.get("aFinal")
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
