import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public oauthTokenUrl: string   = 'http://localhost:8083/oauth/token';

  public jwtPayload: any;

  public emitter = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.carregarToken();
  }

  public async login(user: string, password: string): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body: string = `username=${user}&password=${password}&grant_type=password`;

    return this.httpClient.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token']);
        this.emitter.next(true);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida');
          }
        }

        return Promise.reject(response);
      });
  }

  public async getNewAccessToken(): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.httpClient.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response['access_token']);
        console.log('Novo access token criado!');
        return Promise.resolve();
      })
      .catch(response => {
        console.log('Erro ao renovar token', response);
        return Promise.resolve();
      });
  }

  public isAccessTokenInvalid(): boolean {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  public hasPermission(permission: string): boolean {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  public armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  public carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  public limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

}
