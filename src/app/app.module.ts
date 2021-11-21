import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { GestaoEstrategiaModule } from './gestao-estrategia/gestao-estrategia.module';
import { InfoCadastralModule } from './info-cadastral/info-cadastral.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { ServicosAssociadoModule } from './servicos-associado/servicos-associado.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GestaoEstrategiaModule,
    ToastModule,
    InfoCadastralModule,
    HttpClientModule,
    SegurancaModule,
    ServicosAssociadoModule,
    CoreModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
