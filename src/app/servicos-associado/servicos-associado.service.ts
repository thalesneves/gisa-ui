import { Flow } from './../models/flow.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosAssociadoService {

  private url_file = 'http://localhost:8084/servicosassociado';

  constructor(private httpClient: HttpClient) {}

  public async uploadFile(file: any, flowName: string): Promise<void> {
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("flowName", flowName);

    return this.httpClient.post<any>(this.url_file + "/uploadfile", bodyFormData, { withCredentials: true }).toPromise();
  }

  public async deleteFile(id: number): Promise<Object> {
    return this.httpClient.delete(this.url_file + "/" + id, { withCredentials: true }).toPromise();
  }

  public async getAllFiles(): Promise<Flow[]> {
    return this.httpClient.get<Flow[]>(this.url_file).toPromise();
  }

}
