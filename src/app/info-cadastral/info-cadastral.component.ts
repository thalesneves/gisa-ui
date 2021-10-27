import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../core/error-handler.service';
import { InfoCadastralService } from './info-cadastral.service';
import { User } from './../models/user.model';

@Component({
  selector: 'app-info-cadastral',
  templateUrl: './info-cadastral.component.html',
  styleUrls: ['./info-cadastral.component.css']
})
export class InfoCadastralComponent implements OnInit {

  usuarios: User[];
  tipos: any[];
  planos: any[];
  categorias: any[];

  selectedTipo: any;

  constructor(
    private infoCadastralService: InfoCadastralService,
    private errorHandler: ErrorHandlerService
    ) {
    this.usuarios = [];

    this.tipos = [
      { name: 'Prestador' },
      { name: 'Associado' }
    ];

    this.planos = [
      { name: 'N/A' },
      { name: 'Individual' },
      { name: 'Empresarial' }
    ];

    this.categorias = [
      { name: 'N/A' },
      { name: 'Ativo' },
      { name: 'Suspenso' },
      { name: 'Inativo' }
    ];
  }

  ngOnInit(): void {
    this.infoCadastralService.getUsers()
      .then(users => this.usuarios = users)
      .catch(error => this.errorHandler.handle(error));
  }

}
