import { Component, OnInit } from '@angular/core';
import { Estudios } from '../../interfaces/estudios.interface'
import { EstudiosService } from '../../services/estudios.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudios[] = [];

  constructor(private estudiosSvc: EstudiosService) { }

  ngOnInit(): void {
    this.estudiosSvc.getEstudios()
    .pipe(
      tap( estudios => this.estudios = estudios)
    )
    .subscribe();
  }

}
