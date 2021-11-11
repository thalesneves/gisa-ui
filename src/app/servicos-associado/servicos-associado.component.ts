import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-associado',
  templateUrl: './servicos-associado.component.html',
  styleUrls: ['./servicos-associado.component.css']
})
export class ServicosAssociadoComponent implements OnInit {

  fluxos: any[];

  constructor() {
    this.fluxos = [];

    this.fluxos = [
      {
        nomeFluxo: 'Processo 1',
        nomeArquivo: 'Processo_1.bpmn',
        data: '10/11/2021 22:45:20'
      }
    ];
  }

  ngOnInit(): void {}

  public loadBPMN(url: string): void {
    window.open(url, "_blank");
  }

}
