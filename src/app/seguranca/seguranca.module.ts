import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FontAwesomeModule,
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    AuthService,
    JwtHelperService
  ]
})
export class SegurancaModule { }
