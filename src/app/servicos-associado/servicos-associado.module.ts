import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { ServicosAssociadoComponent } from './servicos-associado.component';

@NgModule({
  declarations: [ServicosAssociadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    FileUploadModule,
    InputTextModule,
    TableModule
  ],
  providers: [ConfirmationService]
})
export class ServicosAssociadoModule { }
