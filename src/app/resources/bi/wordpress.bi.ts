import { Observable, observable } from "rxjs";
import { HttpService } from "../services/http.service";
import { Login } from "../classes/login";
import { SessionService } from "../services/session.service";
import { DadosPost } from '../classes/dados-post';



export namespace WordpressBi {

    export class Parser {
        public static fill(origin: any): DadosPost {
            const dadosPost: DadosPost = Object.assign(new DadosPost(), origin);
            return dadosPost;
        }

        public static fillList(origin: any): Array<DadosPost> {
            const dados: Array<DadosPost> = [];
            for (const dado of origin) {
                dados.push(Parser.fill(dado));
            }
            return dados;
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

        public delete(id: number): Observable<Response> {
            return this.httpService.delete('wp-json/wp/v2/posts/' + id, true);
        }

        public updatePost(dadosPost:DadosPost):Observable<any>{
            return this.httpService.post('wp-json/wp/v2/posts/' + dadosPost.getId(),true, dadosPost)
        }

    }
}
