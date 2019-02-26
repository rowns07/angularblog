import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { Login } from "../classes/login";
import { SessionService } from "../services/session.service";
import { DadosPost } from '../classes/dados-post';



export namespace WordpressBi {

    export class Parser {
        public static fill(origin: any) {
            return Object.assign(new DadosPost(), origin);
        }
    }

    export class RestWordpress {
        constructor(private httpService: HttpService) { }

        public list(): Observable<any> {
            return this.httpService.get('wp-json/wp/v2/posts', false);
        }

        public addPost(token: any, body: DadosPost): Observable<Login> {
            return this.httpService.post('wp-json/wp/v2/posts', true, body);
        }

        public delete( id: number): Observable<Response> {
            return this.httpService.delete('wp-json/wp/v2/posts/' + id, true);
        }


    }
}
