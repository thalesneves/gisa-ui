import { InfoCadastralComponent } from './info-cadastral/info-cadastral.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'info-cadastral', pathMatch: 'full' },
  { path: 'info-cadastral', component: InfoCadastralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
