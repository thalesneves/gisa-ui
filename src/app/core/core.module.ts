import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from './error-handler.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    MenubarModule
  ],
  providers: [
    ErrorHandlerService,
    MessageService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
