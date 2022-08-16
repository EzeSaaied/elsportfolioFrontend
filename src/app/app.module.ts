import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EstudiosItemComponent } from './components/estudios-item/estudios-item.component';
import { EstudiosFormComponent } from './components/estudios-form/estudios-form.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { ExperienciaFormComponent } from './components/experiencia-form/experiencia-form.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosItemComponent } from './components/proyectos-item/proyectos-item.component';
import { ProyectosFormComponent } from './components/proyectos-form/proyectos-form.component';
import { LoginComponent } from './components/login/login.component';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuButtonComponent,
    InicioComponent,
    EstudiosComponent,
    EstudiosItemComponent,
    EstudiosFormComponent,
    SkillsComponent,
    SkillsItemComponent,
    SkillsFormComponent,
    ExperienciaComponent,
    ExperienciaItemComponent,
    ExperienciaFormComponent,
    ProyectosComponent,
    ProyectosItemComponent,
    ProyectosFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSpinnerModule
  ],
  exports: [
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
