import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { GisaHttpInterceptor } from '../seguranca/gisa-http-interceptor';
import { InputTextModule } from 'primeng/inputtext';
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
    GisaHttpInterceptor
  ]
})
export class InfoCadastralModule { }
