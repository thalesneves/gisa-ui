import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';
import { InfoCadastralService } from './../services/info-cadastral.service';

@Component({
  selector: 'app-info-cadastral',
  templateUrl: './info-cadastral.component.html',
  styleUrls: ['./info-cadastral.component.css']
})
export class InfoCadastralComponent implements OnInit {

  usuarios: User[];

  constructor(private infoCadastralService: InfoCadastralService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.infoCadastralService.getUsers().subscribe((user) => {this.usuarios = user});
  }

}
