import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GisaHttpClientWrapper } from '../seguranca/gisa-http-client-wrapper';
import { TableModule } from 'primeng/table';

import { InfoCadastralComponent } from './info-cadastral.component';

@NgModule({
  declarations: [
    InfoCadastralComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    InfoCadastralComponent
  ],
  providers: [
    GisaHttpClientWrapper
  ]
})
export class InfoCadastralModule { }
