import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

export class NotAuthenticatedError {}

/**
 * Classe responsável por ser um interceptor, isto é,
 * interceptar as chamadas (POST, PUT, ...)
 * que o módulo de HttpClient faz. Com isso,
 * pode-se fazer a validação do token, se está válido, por exemplo.
 */

@Injectable()
export class GisaHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenInvalid()) {
      console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

      return from(this.auth.getNewAccessToken())
        .pipe(
          mergeMap(() => {
            if (this.auth.isAccessTokenInvalid()) {
              throw new NotAuthenticatedError();
            }

            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });

            return next.handle(req);
          })
        );
    }

    return next.handle(req);
  }

}
