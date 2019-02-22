import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../resources/services/http.service';
import { LoginBi } from '../resources/bi/login.bi';
import { Login } from '../resources/classes/login';
import { SessionService } from '../resources/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: Login;
  constructor(private router: Router, private httpService: HttpService, private sessionService: SessionService) { }

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
        this.router.navigateByUrl("home-admin");
      },
      error => {
        this.requestLogin = clone;
        // TODO: alert error message
        alert('Senha errada PAI');
        console.log(error);
      }
    );
  }

//ROTAS:
  public irParaBlog() {
    this.router.navigate(['blog'])
  }
  public irParaHomeAdmin() {
    this.router.navigate(['home-admin'])
  }
}
