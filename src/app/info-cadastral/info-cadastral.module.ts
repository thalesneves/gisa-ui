import { NgModule } from '@angular/core';

import { InfoCadastralComponent } from './info-cadastral.component';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    InfoCadastralComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    InfoCadastralComponent
  ]
})
export class InfoCadastralModule { }