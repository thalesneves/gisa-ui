import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';
import { LoginFormComponent } from './login-form/login-form.component';

export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8082'],
        disallowedRoutes: ['http://localhost:8082/oauth/token']
      }
    }),

    ButtonModule,
    InputTextModule
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
