import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InfoCadastralService {

  private url = 'http://localhost:11506/infocadastral/users';

  constructor(private httpClient: HttpClient) { }

  public async getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.url)
      .toPromise()
      .then(users => JSON.parse(JSON.stringify(users)));
  }

}
