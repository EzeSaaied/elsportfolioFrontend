import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'estudios',
    component: EstudiosComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent,
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }