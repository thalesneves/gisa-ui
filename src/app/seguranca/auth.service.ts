import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  oauthTokenUrl: string = 'http://localhost:8082/oauth/token';

  constructor(private http: HttpClient) {}

  async login(user: string, password: string): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body: string = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }
}
