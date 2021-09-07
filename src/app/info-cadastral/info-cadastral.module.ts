import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCadastralComponent } from './info-cadastral.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [InfoCadastralComponent],
  imports: [CommonModule, TableModule],
  exports: [InfoCadastralComponent]
})
export class InfoCadastralModule { }
