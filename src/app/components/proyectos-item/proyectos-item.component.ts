import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() proyecto!: Proyectos;
  @Output() onDeleteProyecto: EventEmitter<Proyectos> = new EventEmitter();

  constructor(protected authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onDelete(proyecto: Proyectos) {
    this.onDeleteProyecto.emit(proyecto);
  }

}
