import { AuthService } from './auth.service';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FontAwesomeModule
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    AuthService
  ]
})
export class SegurancaModule { }
