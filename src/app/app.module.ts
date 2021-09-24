import { AppComponent } from './app.component';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InfoCadastralModule } from './info-cadastral/info-cadastral.module';
import { HttpClientModule } from '@angular/common/http';
import { SegurancaModule } from './seguranca/seguranca.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    InfoCadastralModule,
    HttpClientModule,
    SegurancaModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
