import { GestaoEstrategiaComponent } from './gestao-estrategia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [GestaoEstrategiaComponent],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class GestaoEstrategiaModule { }
