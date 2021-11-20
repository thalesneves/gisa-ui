import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosAssociadoService {

  private url_upload_file = 'http://localhost:8084/servicosassociado/uploadfile';

  constructor(private httpClient: HttpClient) { }

  public async uploadFile(file: any, flowName: string): Promise<void> {
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("flowName", flowName);

    return this.httpClient.post<any>(this.url_upload_file, bodyFormData, { withCredentials: true })
      .toPromise()
      .then(response => {
        console.log("OK", response);
      });
  }

}
