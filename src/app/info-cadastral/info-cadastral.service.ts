import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InfoCadastralService {

  private url_get_users = 'http://localhost:11506/infocadastral/users';

  constructor(private httpClient: HttpClient) { }

  public async getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.url_get_users)
      .toPromise()
      .then(response => JSON.parse(JSON.stringify(response)).content);
  }

  public async getUsersByTipo(tipoUsuario: string): Promise<User[]> {
    if(tipoUsuario == "todos") {
      return this.getUsers();
    }

    return this.httpClient.get<User[]>(this.url_get_users + "/" + tipoUsuario)
      .toPromise()
      .then(response => JSON.parse(JSON.stringify(response)).content);
  }

}
