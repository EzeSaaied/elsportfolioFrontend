import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudios } from '../../interfaces/estudios.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-estudios-item',
  templateUrl: './estudios-item.component.html',
  styleUrls: ['./estudios-item.component.css']
})
export class EstudiosItemComponent implements OnInit {

  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  form: FormGroup;

  editEstudioButton = false;

  showCert = false;

  @Input() estudio!: Estudios;
  @Output() onDeleteEstudio: EventEmitter<Estudios> = new EventEmitter();
  @Output() onEditEstudio: EventEmitter<Estudios> = new EventEmitter();

  constructor( private formBuilder: FormBuilder, protected authSvc: AuthService) {

    this.form = this.formBuilder.group(
      {
        titulo: ["", [Validators.required]],
        institucion: ["", [Validators.required]],
        logo: ["", [Validators.required]],
        a_inicio: [0, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        a_final: [0, [Validators.required, Validators.min(1996), Validators.max(2022)]],
        descripcion: ["", [Validators.required]],
        certificado: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  onDelete(estudio: Estudios) {
    this.onDeleteEstudio.emit(estudio);
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

  onEdit(estudio: Estudios) {
    this.onEditEstudio.emit(estudio);
    this.editEstudioButton = !this.editEstudioButton;
  }
  
  onToggleEdit() {
    this.editEstudioButton = !this.editEstudioButton;
  }

  onToggleCert() {
    this.showCert = !this.showCert;
  }

}
