import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { ServicosAssociadoComponent } from './servicos-associado.component';

@NgModule({
  declarations: [ServicosAssociadoComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    FileUploadModule,
    HttpClientModule,
    TableModule
  ],
  providers: [ConfirmationService]
})
export class ServicosAssociadoModule { }
