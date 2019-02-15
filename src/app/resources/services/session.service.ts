import { Injectable } from '@angular/core';
import { Login } from '../classes/login';

@Injectable()
export class SessionService {

  constructor() { }

  private currentResponseLogin: Login;

  public getCurrentResponseLogin(): Login {
    return this.currentResponseLogin;
  }

  public setCurrentResponseLogin(currentResponseLogin: Login): void {
    this.currentResponseLogin = currentResponseLogin;
  }

  public clear(): void {
    this.currentResponseLogin = undefined;
  }

}
