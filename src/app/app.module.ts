import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EstudiosItemComponent } from './components/estudios-item/estudios-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProyectosItemComponent } from './components/proyectos-item/proyectos-item.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuButtonComponent,
    EstudiosComponent,
    EstudiosItemComponent,
    InicioComponent,
    SkillsComponent,
    SkillsItemComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ProyectosItemComponent,
    ExperienciaItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
