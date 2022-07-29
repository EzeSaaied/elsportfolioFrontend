import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  @Input() experiencia!: Experiencia;
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(experiencia: Experiencia) {
    this.onDeleteExperiencia.emit(experiencia);
  }

}
