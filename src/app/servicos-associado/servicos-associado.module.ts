import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { ServicosAssociadoComponent } from './servicos-associado.component';

@NgModule({
  declarations: [ServicosAssociadoComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule
  ]
})
export class ServicosAssociadoModule { }
