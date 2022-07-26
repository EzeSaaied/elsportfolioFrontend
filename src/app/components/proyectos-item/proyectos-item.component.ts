import { Component, OnInit, Input } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos.interface'

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {

  @Input() proyecto!: Proyectos;

  constructor() { }

  ngOnInit(): void {
  }

}
