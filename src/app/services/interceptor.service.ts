import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser = this.authService.UsuarioAutenticado;
    if (currentUser && currentUser.jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + currentUser.jwtToken
        }
      })
    }
    console.log("Interceptor running " + JSON.stringify(currentUser))
    return next.handle(request)
  }
 
}
