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

  constructor(
    private infoCadastralService: InfoCadastralService,
    private errorHandler: ErrorHandlerService
    ) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.infoCadastralService.getUsers()
      .then(users => this.usuarios = users)
      .catch(error => this.errorHandler.handle(error));
  }

}
