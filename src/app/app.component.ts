import { User } from './models/user.model';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InfoCadastralService } from './services/info-cadastral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'gisa-front';

  items: MenuItem[] = [];
  users: User[] = [];

  activeItem!: MenuItem;

  constructor(private service: InfoCadastralService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Informações Cadastrais',
        icon: 'pi pi-fw pi-home',
        routerLink: 'info-cadastral'
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
}
