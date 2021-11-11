import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';

import { GestaoEstrategiaComponent } from './gestao-estrategia.component';

@NgModule({
  declarations: [GestaoEstrategiaComponent],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class GestaoEstrategiaModule { }
