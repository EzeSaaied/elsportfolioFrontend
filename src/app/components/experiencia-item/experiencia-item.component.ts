import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  form: FormGroup;

  editExperienciaButton = false;

  @Input() experiencia!: Experiencia;
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  constructor( private formBuilder: FormBuilder, protected authSvc: AuthService) {

    this.form = this.formBuilder.group(
      {
        cargo: ["", [Validators.required]],
        empresa: ["", [Validators.required]],
        logo: ["", [Validators.required]],
        a_inicio: [0, [Validators.required]],
        a_final: [0, [Validators.required]],
        descripcion: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  onDelete(experiencia: Experiencia) {
    this.onDeleteExperiencia.emit(experiencia);
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

  onEdit(skill: Experiencia) {
    this.onEditExperiencia.emit(skill);
    this.editExperienciaButton = !this.editExperienciaButton;
  }
  
  onToggleEdit() {
    this.editExperienciaButton = !this.editExperienciaButton;
  }
}
