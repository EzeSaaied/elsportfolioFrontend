import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from "ngx-spinner";
import { Inicio } from '../../interfaces/inicio.interface';
import { InicioService } from 'src/app/services/inicio.service';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  inicio!: Inicio;

  faSquarePlus = faSquarePlus;

  form: FormGroup;

  editInicioButton = false;

  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder, private inicioSvc: InicioService, protected authSvc: AuthService) {

    this.form = this.formBuilder.group(
      {
        profilepic: ["", [Validators.required]],
        titulo: ["", [Validators.required]],
        aboutme: ["", [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
    this.spinner.show();
    this.inicioSvc.getInicio()
    .pipe(
      tap( inicio => this.inicio = inicio[0])
    )
    .subscribe(() => this.spinner.hide());
  }

  editInicio(inicio: Inicio){
    this.inicioSvc.editInicio(inicio)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe();
    this.editInicioButton = !this.editInicioButton;
  }

  onToggleEdit() {
    this.editInicioButton = !this.editInicioButton;
  }

  get Profilepic() {
    return this.form.get("profilepic")
  }
  
  get Titulo() {
    return this.form.get("titulo")
  }
  
  get Aboutme() {
    return this.form.get("aboutme")
  }
}
