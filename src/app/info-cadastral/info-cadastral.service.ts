import { GisaHttpClientWrapper } from '../seguranca/gisa-http-client-wrapper';
import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InfoCadastralService {

  private url = 'http://localhost:8082/infocadastral/users';

  constructor(private httpClient: GisaHttpClientWrapper) { }

  public async getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.url).toPromise()
      .then(users => JSON.parse(JSON.stringify(users)))
      .catch(() => { return Promise.reject(`Error to find users`) });
  }
}
