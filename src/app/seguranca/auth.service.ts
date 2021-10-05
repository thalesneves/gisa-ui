import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        var token = this.extrairToken(response);
        this.armazenarToken(token);
      })
      .catch(response => {

        if (response.status === 400) {
          const responseJson = JSON.parse(JSON.stringify(response));

          if (responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);
      });
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
