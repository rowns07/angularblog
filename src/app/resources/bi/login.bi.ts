import { Observable } from 'rxjs';
import { Login } from '../classes/login';
import { HttpService } from '../services/http.service';

export namespace LoginBi {

    export class Parser {
        public static fill(origin: any) {
            return Object.assign(new Login(), origin);
        }
    }

    export class RestAdm {
        constructor(private httpService: HttpService) { }

        public doLogin(requestLogin: Login): Observable<Login> {
            return this.httpService.post('wp-json/jwt-auth/v1/token', false, requestLogin);
        }

    }
}
