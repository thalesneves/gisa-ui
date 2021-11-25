import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ErrorHandlerService } from './../core/error-handler.service';
import { Flow } from './../models/flow.model';
import { ServicosAssociadoService } from './servicos-associado.service';

import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-servicos-associado',
  templateUrl: './servicos-associado.component.html',
  styleUrls: ['./servicos-associado.component.css']
})
export class ServicosAssociadoComponent implements OnInit {

  fluxos: Flow[] = [];
  flowId: number = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private servicosAssociadoService: ServicosAssociadoService
  ) {}

  ngOnInit(): void {
    this.buscarFluxos();
  }

  public buscarFluxos(): void {
    this.servicosAssociadoService.getAllFiles().subscribe(
      data => this.fluxos = JSON.parse(JSON.stringify(data)).content,
      error => this.errorHandlerService.handle(error)
    );
  }

  public loadBPMN(url: string): void {
    window.open(url, "_blank");
  }

  public uploadDialog(): void {
    this.confirmationService.confirm({ key: 'upload' });
  }

  public lookDialog(): void {
    this.confirmationService.confirm({ key: 'look' });
  }

  public editDialog(flowId: number): void {
    this.confirmationService.confirm({ key: 'edit'});
    this.flowId = flowId;
  }

  public async uploadFile(event: any, flowName: string): Promise<void>  {
    if (event.files && event.files[0]) {
      await this.servicosAssociadoService.uploadFile(event.files[0], flowName);
      this.buscarFluxos();
      this.messageService.add({severity:'success', detail:'Upload realizado com sucesso!'});
    } else {
      this.messageService.add({severity:'error', detail:'Houve problemas com o upload!'});
    }
  }

  public deleteDialog(id: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      key: 'exclusion',
      accept: async () => {
        await this.servicosAssociadoService.deleteFile(id);
        this.buscarFluxos();
        this.messageService.add({severity:'success', detail:'Exclusão realizada com sucesso!'});
      }
    });
  }

  public downloadFile(id: number, fileName: string): void {
    this.servicosAssociadoService.downloadFile(id).subscribe((response: any) => {
      let blob: any = new Blob([response], { type: 'draw.io' });
			const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, fileName);
    }), (error: any) => this.errorHandlerService.handle(error);
  }

  public async editFile(fileName: string): Promise<void> {
    await this.servicosAssociadoService.editFile(this.flowId, fileName);
    this.buscarFluxos();
    this.messageService.add({severity:'success', detail:'Atualização realizada com sucesso!'});
  }

}
