import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos.interface'
import { ProyectosService } from '../../services/proyectos.service';
import { AuthService } from 'src/app/services/auth.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from "ngx-spinner";
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  faSquarePlus = faSquarePlus;
  newProyectoButton = false;  

  proyectos: Proyectos[] = [];

  constructor(private proyectosSvc: ProyectosService, protected authSvc: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.proyectosSvc.getProyectos()
    .pipe(
      tap( proyectos => this.proyectos = proyectos)
    )
    .subscribe(() => this.spinner.hide());
  }

  deleteProyecto(proyecto: Proyectos){
    this.proyectosSvc.deleteProyecto(proyecto)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.proyectos = this.proyectos.filter( p => p.id_proyectos !== proyecto.id_proyectos)));
    
  }
  onToggleCreate() {
    this.newProyectoButton = !this.newProyectoButton;
  }
  
  editProyecto(proyecto: Proyectos){
    this.proyectosSvc.editProyecto(proyecto)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe();
  }

}
