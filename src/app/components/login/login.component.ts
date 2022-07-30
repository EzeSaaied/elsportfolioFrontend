import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, protected authService: AuthService, private router: Router) {

    this.form = this.formBuilder.group(
      {
        username:["", [Validators.required]],
        password:["", [Validators.required, Validators.minLength(8)]],
      }
    )
   }

  ngOnInit(): void {
  }

  get Username() {
    return this.form.get("username");
  }

  get Password() {
    return this.form.get("password");
  }

  onLogin(event:Event) {
    event.preventDefault;
    this.authService.LogIn(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
      this.router.navigate(["/inicio"])
    })
  }

}
