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

  deleteProyecto(proyecto: Proyectos){
    this.proyectosSvc.deleteProyecto(proyecto)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.proyectos = this.proyectos.filter( p => p.id_proyectos !== proyecto.id_proyectos)));
    
  }

}
