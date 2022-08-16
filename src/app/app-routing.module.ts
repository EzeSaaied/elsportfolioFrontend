import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    path: '',
    redirectTo: 'inicio',
    pathMatch: "full",
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
