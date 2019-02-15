import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable()
export class HttpService {
  private url: string;


  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.url = 'http://localhost:8888/teste/wp-json/jwt-auth/v1/token';
  }

  public get(path: string, authenticationRequired: boolean): Observable<any> {
    return this.http.get(this.url + path);
  }

  // public post(path: string, body: any, authenticationRequired: boolean): Observable<any> {
  //   return this.http.post(this.url + path, body);
  // }

  /**
  * Requisições POST
  * @param autenticacao  true para chamadas autenticadas, false para chamadas não autenticadas
  * @param url url que será concatenada ao path
  * @param body Conteúdo que será enviado no corpo da requisição
  * @param headers (Opcional) Conteúdo que será enviado no HttpHeader
  */
  public post(authenticationRequired: boolean, body: any, headers?: HttpHeaders): Observable<any> {
    const options = this.criarOptions(authenticationRequired, undefined, headers);
    let retorno: Observable<any>;

    retorno = this.http.post(this.url, body, options);
    //   return this.http.post(this.url + path, body);

    return retorno;
  }

  private criarOptions(autenticacao: boolean, responseType?: string, headers?: HttpHeaders, body?: any) {
    let _headers: HttpHeaders = new HttpHeaders();
    if (autenticacao) {
      let _authorization = '';
      _authorization = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvdGVzdGUiLCJpYXQiOjE1NTAyNzA1OTIsIm5iZiI6MTU1MDI3MDU5MiwiZXhwIjoxNTUwODc1MzkyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.ydzAft-SL6JSYhHrGnnpuOXWrVeYGkSj0bqw2GT37OU';
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
