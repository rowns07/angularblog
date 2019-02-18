import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginBi } from './resources/bi/login.bi';
import { HttpService } from './resources/services/http.service';
import { SessionService } from './resources/services/session.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private sessionService: SessionService, private http: HttpService, private router: Router) {

    }

    // public doLogout() {
    //     alert('Deseja encerrar a sessão?')
    //         .then((valor) => {
    //             if (valor.value) {
    //                 new LoginBi.RestAdm(this.http).requestLogout()
    //                     .subscribe(() => {
    //                         this.sessionService.clear();
    //                         this.router.navigate(['login']);
    //                     });
    //             }
    //         });
    // }

}
