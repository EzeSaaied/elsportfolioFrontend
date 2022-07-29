import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudios } from '../../interfaces/estudios.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-estudios-item',
  templateUrl: './estudios-item.component.html',
  styleUrls: ['./estudios-item.component.css']
})
export class EstudiosItemComponent implements OnInit {

  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  @Input() estudio!: Estudios;
  @Output() onDeleteEstudio: EventEmitter<Estudios> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(estudio: Estudios) {
    this.onDeleteEstudio.emit(estudio);
  }


}
