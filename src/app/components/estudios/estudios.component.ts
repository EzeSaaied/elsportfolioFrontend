import { Component, OnInit } from '@angular/core';
import { Estudios } from '../../interfaces/estudios.interface'
import { EstudiosService } from '../../services/estudios.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  faSquarePlus = faSquarePlus;
  
  newStudyButton = false;  

  estudios: Estudios[] = [];

  constructor(private estudiosSvc: EstudiosService, protected authSvc: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.estudiosSvc.getEstudios()
    .pipe(
      tap( estudios => this.estudios = estudios)
    )
    .subscribe(() => this.spinner.hide());
  }

  deleteEstudio(estudio: Estudios){
    this.estudiosSvc.deleteEstudio(estudio)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.estudios = this.estudios.filter( e => e.id_estudios !== estudio.id_estudios)));
  }

  onToggleCreate() {
    this.newStudyButton = !this.newStudyButton;
  }
  
  editEstudio(estudio: Estudios){
    this.estudiosSvc.editEstudio(estudio)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe();
  }
  
}
