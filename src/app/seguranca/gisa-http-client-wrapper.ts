import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable, from as observableFromPromise } from 'rxjs';

import { AuthService } from './auth.service';

export class NotAuthenticatedError {}

/**
 * Classe responsável por ser um wrapper, isto é,
 * interceptar as chamadas (POST, PUT, ...)
 * que o módulo de HttpClient faz. Com isso,
 * pode-se fazer a validação do token, se está válido, por exemplo.
 */

@Injectable()
export class GisaHttpClientWrapper extends HttpClient {

  constructor(
    private auth: AuthService,
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.delete<T>(url, options));
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.patch<T>(url, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.head<T>(url, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.options<T>(url, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.get<T>(url, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.post<T>(url, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doNewRequest<T>(() => super.put<T>(url, body, options));
  }

  private doNewRequest<T>(fn: Function): Observable<T> {
    if (this.auth.isAccessTokenInvalid()) {
      console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

      const callNewAccessToken = this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();
        });

      return observableFromPromise(callNewAccessToken);
    } else {
      return fn();
    }
  }

}
