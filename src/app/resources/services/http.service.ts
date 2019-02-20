import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable()
export class HttpService {
  private url: string;


  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.url = 'http://localhost:8888/teste/';
  }

  public get(path: string, authenticationRequired: boolean): Observable<any> {
    return this.http.get(this.url + path);
  }

  /**
  * Requisições POST
  * @param path url que será concatenada a url
  * @param authenticationRequired true para chamadas autenticadas, false para chamadas não autenticadas
  * @param body Conteúdo que será enviado no corpo da requisição
  * @param headers (Opcional) Conteúdo que será enviado no HttpHeader
  */
  public post(path: string, authenticationRequired?: boolean, body?: any, headers?: HttpHeaders): Observable<any> {
    const options = this.criarOptions(authenticationRequired, undefined, headers);
    let retorno: Observable<any>;

    if (authenticationRequired) {
      retorno = this.http.post(this.url + path, body, options);
    } else {
      retorno = this.http.post(this.url + path, body);
    }

    return retorno;
  }


  private criarOptions(autenticacao: boolean, responseType?: string, headers?: HttpHeaders, body?: any) {
    let _headers: HttpHeaders = new HttpHeaders();
    if (autenticacao) {
      let _authorization = '';
      _authorization = 'Bearer' + this.sessionService.getCurrentResponseLogin().getToken();
      _headers = _headers.append('Authorization', _authorization);
    }
    _headers = _headers.append('Content-Type', 'application/json');
    if (headers !== undefined && headers.keys().length > 0) {
      for (const k of headers.keys()) {
        _headers = _headers.append(k, headers.get(k));
      }
    }
    let options;
    if (responseType !== undefined) {
      options = { headers: _headers, responseType: responseType, observe: 'response' };
    } else {
      options = { headers: _headers };
    }
    if (body) {
      options.body = body;
    }
    return options;
  }

}
