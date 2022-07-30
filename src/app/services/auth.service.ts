import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/public/auth"
  currentUserSubject: BehaviorSubject<any>;
 loginError = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log('AuthService');
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || "{}"));
  }

  LogIn(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials)
    .pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
    .pipe(catchError((err) => {
        console.log('Login Error')
        console.error(err);
        if (err) {
          this.onLoginError();
        }
        return throwError(()=> new Error('err'))
      })
    )
  }

  onLoginError() {
    return this.loginError = !this.loginError;
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value; 
  }

  isLoggedIn() {
    var currentUser = this.UsuarioAutenticado;
    if (currentUser && currentUser.jwtToken) {
      return true;
    }
    else {
      return false;
    }
  }

  LogOut() {
    sessionStorage.removeItem('currentUser');
    location.reload();
  }
}
