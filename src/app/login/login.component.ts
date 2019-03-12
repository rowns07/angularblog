import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LoginBi } from '../resources/bi/login.bi';
import { Login } from '../resources/classes/login';
import { HttpService } from '../resources/services/http.service';
import { SessionService } from '../resources/services/session.service';
import { AlertService } from '../shared/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: Login;
  bsModalRef: BsModalRef;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private sessionService: SessionService,
    private alertService: AlertService) { }

  public ngOnInit(): void {
    this.requestLogin = new Login();
  }

  public entrar(event: Event): void {
    // para prevenir o recarregamento da página
    event.preventDefault();

    const clone: Login = Object.assign(new Login(), this.requestLogin);
    this.requestLogin = undefined;

    new LoginBi.RestAdm(this.httpService).doLogin(clone).subscribe(
      success => {
        this.sessionService.setCurrentResponseLogin(LoginBi.Parser.fill(success));
        this.router.navigateByUrl('home-admin');
      },
      error => {
        this.requestLogin = clone;
        // TODO: alert error message
        this.handlError('Usuário ou Senha invalidos');
        console.log(error);
      }
    );
  }

  private handlError(message: string) {
    this.alertService.showAlertDanger(message);
  }

}
