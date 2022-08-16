import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from '../../interfaces/proyectos.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  form: FormGroup;

  editProyectoButton = false;

  @Input() proyecto!: Proyectos;
  @Output() onDeleteProyecto: EventEmitter<Proyectos> = new EventEmitter();
  @Output() onEditProyecto: EventEmitter<Proyectos> = new EventEmitter();

  constructor( private formBuilder: FormBuilder, protected authSvc: AuthService) {

    this.form = this.formBuilder.group(
      {
        nombre: ["", [Validators.required]],
        descripcion: ["", [Validators.required]],
        a_inicio: [0, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        a_final: [0, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        url: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  onDelete(proyecto: Proyectos) {
    if(confirm("Seguro que desea borrar " + this.proyecto.nombre + "?")){
    this.onDeleteProyecto.emit(proyecto);}
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
  
  onEdit(proyecto: Proyectos) {
    this.onEditProyecto.emit(proyecto);
    this.editProyectoButton = !this.editProyectoButton;
  }

  onToggleEdit() {
    this.editProyectoButton = !this.editProyectoButton;
  }

}
