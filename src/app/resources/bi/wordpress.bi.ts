import { Observable } from 'rxjs';
import { DadosPost } from '../classes/dados-post';
import { Login } from '../classes/login';
import { HttpService } from '../services/http.service';
import { WordpressService } from '../services/wordpress.service';



export namespace WordpressBi {

    export class Parser {
        public static fill(origin: any) {
            const dadosPost: DadosPost = Object.assign(new DadosPost(), origin);
            return dadosPost;
        }

        public static fillList(origin: any): Array<DadosPost> {
            const dadosPost: Array<DadosPost> = [];
            for (const dado of origin) {
                dadosPost.push(Parser.fill(dado));
            }
            return dadosPost;
        }

    }

    export class RestWordpress {
        constructor(private httpService: HttpService) { }

        public list(): Observable<any> {
            return this.httpService.get('wp-json/wp/v2/posts', false);
        }

        public addPost(body: DadosPost): Observable<Login> {
            return this.httpService.post('wp-json/wp/v2/posts', true, body);
        }

        public delete(id: number): Observable<Response> {
            return this.httpService.delete('wp-json/wp/v2/posts/' + id, true);
        }

        public updatePost(dadosPost: any): Observable<any> {
            return this.httpService.post('wp-json/wp/v2/posts/' + dadosPost.getId(), true, dadosPost);
        }

    }

    export class Inteligencia {
        constructor(private httpService: HttpService, private wpService:WordpressService) { }

        public lista:any;
        public listPostsFromBack() {
            // let listaDePosts:any;
             return new Observable<Response>(observer => {
                new RestWordpress(this.httpService).list().subscribe(
                    success => {
                        this.wpService.setCurrentResponsePost(WordpressBi.Parser.fillList(success));
                         observer.next();
                        // this.lista = success;
                        // console.log(this.lista, 'lista')
                    },
                    error => {
                         observer.error();
                         this.wpService.setCurrentResponsePost([]);
                        console.log(error);
                    }
                );
             });
        }
    }
}
