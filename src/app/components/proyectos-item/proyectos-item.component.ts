import { Component, OnInit, Input } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos.interface';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  @Input() proyecto!: Proyectos;

  constructor() { }

  ngOnInit(): void {
  }

}
