import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
