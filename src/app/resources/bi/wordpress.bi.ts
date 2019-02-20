import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { Login } from "../classes/login";
import { SessionService } from "../services/session.service";



export namespace WordpressBi {

    // export class Parser {
    //     public static fill(origin: any) {
    //         return Object.assign(new Login(), origin);
    //     }
    // }

    export class RestWordpress {
        constructor(private httpService: HttpService) { }

        public list(): Observable<any> {
            return this.httpService.get('wp-json/wp/v2/posts',false);
        }

        public addPost(requestLogin: Login): Observable<Login> {
            return this.httpService.post('wp-json/wp/v2/posts',false, requestLogin);
        }

    }
}
