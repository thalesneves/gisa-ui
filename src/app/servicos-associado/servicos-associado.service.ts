import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosAssociadoService {

  private url_file = 'http://localhost:11506/servicosassociado';

  constructor(private httpClient: HttpClient) {}

  public async uploadFile(file: any, flowName: string): Promise<void> {
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("flowName", flowName);

    return this.httpClient.post<any>(this.url_file + "/uploadfile", bodyFormData).toPromise();
  }

  public downloadFile(id: number): any {
    return this.httpClient.get(this.url_file + "/downloadfile/" + id, { responseType: 'blob' });
  }

  public async deleteFile(id: number): Promise<Object> {
    return this.httpClient.delete(this.url_file + "/" + id).toPromise();
  }

  public getAllFiles(): Observable<any> {
    return this.httpClient.get<any>(this.url_file);
  }

  public async editFile(flowId: number, flowName: string): Promise<Object> {
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/json');

    const body = { flowName: flowName };

    return this.httpClient.put(this.url_file + "/" + flowId, body, { headers }).toPromise();
  }

}
