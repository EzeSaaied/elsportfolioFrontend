import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos.interface'
import { ProyectosService } from '../../services/proyectos.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor(private proyectosSvc: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosSvc.getProyectos()
    .pipe(
      tap( proyectos => this.proyectos = proyectos)
    )
    .subscribe();
  }

}