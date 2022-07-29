import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface'
import { ExperienciaService } from '../../services/experiencia.service';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  
  newExpButton = false;  

  experiencia: Experiencia[] = [];

  constructor(private experienciaSvc: ExperienciaService, protected authSvc: AuthService) { }

  ngOnInit(): void {
    this.experienciaSvc.getExperiencia()
    .pipe(
      tap( experiencia => this.experiencia = experiencia)
    )
    .subscribe();
  }

  deleteExperiencia(exp: Experiencia){
    this.experienciaSvc.deleteExperiencia(exp)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.experiencia = this.experiencia.filter( e => e.id_experiencia !== exp.id_experiencia)));
  }
  
  onToggleCreate() {
    this.newExpButton = !this.newExpButton;
  }

  editExperiencia(experiencia: Experiencia){
    this.experienciaSvc.editExperiencia(experiencia)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe();
  }

}
