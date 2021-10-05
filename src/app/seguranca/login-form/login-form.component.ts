import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(public auth: AuthService) { }

  login(usuario: string, senha: string): void {
    this.auth.login(usuario, senha)
      .catch(erro => {
        console.log(erro);
      });
  }

}
