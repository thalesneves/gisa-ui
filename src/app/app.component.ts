import { User } from './models/user.model';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InfoCadastralService } from './info-cadastral/info-cadastral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  items: MenuItem[] = [];
  users: User[] = [];

  activeItem!: MenuItem;

  constructor(
    private service: InfoCadastralService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Informações Cadastrais',
        icon: 'pi pi-fw pi-home',
        routerLink: 'infocadastral'
      },
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {
        label: 'Logout',
        icon: 'pi pi-power-off'
      },
    ];

    this.activeItem = this.items[0];
  }

  showNavBar(): boolean {
    return this.router.url !== '/login';
  }

}
