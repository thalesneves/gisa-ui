import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  public tokensRevokeUrl: string = 'http://localhost:8083/tokens/revoke';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  public async logout(): Promise<void> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.httpClient.delete(this.tokensRevokeUrl, { headers })
      .toPromise()
      .then(() => {
        this.authService.limparAccessToken();
      })
  }

}
