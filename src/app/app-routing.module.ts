import { ServicosAssociadoComponent } from './servicos-associado/servicos-associado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './seguranca/auth.guard';
import { GestaoEstrategiaComponent } from './gestao-estrategia/gestao-estrategia.component';
import { InfoCadastralComponent } from './info-cadastral/info-cadastral.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'infocadastral',
    component: InfoCadastralComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestaoestrategia',
    component: GestaoEstrategiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicosassociado',
    component: ServicosAssociadoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
