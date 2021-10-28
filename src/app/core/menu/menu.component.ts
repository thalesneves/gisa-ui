import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../error-handler.service';
import { LogoutService } from './../../seguranca/logout.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  users: User[] = [];

  activeItem!: MenuItem;

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private logoutService: LogoutService,
    private router: Router
  ) {
    this.authService.emitter.subscribe(
      resp => {
        if (resp) {
          this.buildMenu();
        }
      }
    );
  }

  ngOnInit() {
    this.buildMenu();
  }

  public buildMenu(): void {
    const infoCadastral = {
      label: 'Informações Cadastrais',
      icon: 'pi pi-fw pi-home',
      routerLink: 'infocadastral'
    };

    const servicoAssociado = {
      label: 'Serviços ao Associado',
      icon: 'pi pi-fw pi-sort-amount-up',
    };

    const gestao = {
      label: 'Gestão e Estratégia',
      icon: 'pi pi-fw pi-chart-line'
    };

    if (this.authService.hasPermission('ROLE_FULL_ACCESS')) {
      this.items.push(infoCadastral);
      this.items.push(servicoAssociado);
      this.items.push(gestao);
    }

    this.activeItem = this.items[0];
  }

  public showNavBar(): boolean {
    return this.router.url !== '/login';
  }

  public logout(): void {
    this.logoutService.logout()
      .then(() => { this.router.navigate(['/login']) })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

}
