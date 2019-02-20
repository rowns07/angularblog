import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../resources/services/wordpress.service';
import { WordpressBi } from '../resources/bi/wordpress.bi';
import { HttpService } from '../resources/services/http.service';
import { SessionService } from '../resources/services/session.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  posts$: Observable<any[]>
  posts2: Observable<any[]>;
  postsTeste: any;

  constructor(private wp: WordpressService, private httpService: HttpService,private sessionService:SessionService) {
   
    this.posts$ = this.wp.getPosts();
    console.log(this.posts$);

    // this.posts2 = new 
    // console.log(this.getPostsTeste());

  }
  ngOnInit() {
      this.listPosts();
}

  public getPostsTeste(): Observable<Array<any>> {

    return new Observable<Array<any>>(observer => {

        this.wp.loadPosts().subscribe(
            response => {
                if (response) {
                    this.postsTeste = response;
                    observer.next(this.postsTeste);
                    observer.complete();
                } else {
                    observer.error(response);   
                }
            },
            error => {
                observer.error(error);
            }
        )
       
    });
}


public listPosts() {
    new WordpressBi.RestWordpress(this.httpService).list().subscribe(
      success => {
        // this.sessionService.setCurrentResponseLogin(LoginBi.Parser.fill(success));
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  }
}
