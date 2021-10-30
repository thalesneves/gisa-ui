import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { GisaHttpInterceptor } from '../seguranca/gisa-http-interceptor';
import { InfoCadastralComponent } from './info-cadastral.component';

@NgModule({
  declarations: [
    InfoCadastralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
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
