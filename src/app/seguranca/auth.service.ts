import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  public oauthTokenUrl: string = 'http://localhost:8082/oauth/token';
  public jwtPayload: any;

  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) {
    this.carregarToken();
  }

  public async login(user: string, password: string): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body: string = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        var token = this.extrairToken(response);
        this.armazenarToken(token);
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

  public isAccessTokenInvalid(): boolean {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  public async getNewAccessToken(): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        var token = this.extrairToken(response);
        this.armazenarToken(token);
        console.log('Novo access token criado!');
        return Promise.resolve();
      })
      .catch(response => {
        console.log('Erro ao renovar token', response);
        return Promise.resolve();
      });
  }

  public hasPermission(permission: string): boolean {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  private extrairToken(response: Object): string {
    return JSON.parse(JSON.stringify(response)).access_token;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

}
