import { Component, OnInit, Input } from '@angular/core';
import { Estudios } from '../../interfaces/estudios.interface'

@Component({
  selector: 'app-estudios-item',
  templateUrl: './estudios-item.component.html',
  styleUrls: ['./estudios-item.component.css']
})
export class EstudiosItemComponent implements OnInit {

  @Input() estudio!: Estudios;

  constructor() { }

  ngOnInit(): void {
  }

}
