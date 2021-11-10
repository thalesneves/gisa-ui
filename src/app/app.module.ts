import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { GestaoEstrategiaModule } from './gestao-estrategia/gestao-estrategia.module';
import { InfoCadastralModule } from './info-cadastral/info-cadastral.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { SharedModule } from './shared/shared.module';
import { ServicosAssociadoComponent } from './servicos-associado/servicos-associado.component';

@NgModule({
  declarations: [AppComponent, ServicosAssociadoComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GestaoEstrategiaModule,
    ToastModule,
    InfoCadastralModule,
    HttpClientModule,
    SegurancaModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
