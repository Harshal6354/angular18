import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service1Service } from '../SERVICES/service1.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  service1 = inject(Service1Service);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken: string = this.service1.getAuthtoken();
    const authReq = request.clone({
      headers: request.headers.set('Athentication', `Bearer${authToken}`),
    });
    return next.handle(authReq);
  }
}
