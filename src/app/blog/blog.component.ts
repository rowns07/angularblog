import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressBi } from '../resources/bi/wordpress.bi';
import { DadosPost } from '../resources/classes/dados-post';
import { HttpService } from '../resources/services/http.service';
import { WordpressService } from '../resources/services/wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Observable<any[]>;
  listaDePosts: Array<DadosPost[]>;


  constructor(private wp: WordpressService, private httpService: HttpService) {

    //  Recebendo Observable com pipe async 
    // this.posts$ = this.wp.getPosts();
    // console.log(this.posts$);

  }
  ngOnInit() {
    this.listPosts();
  }

  public listPosts() {
    new WordpressBi.RestWordpress(this.httpService).list().subscribe(
      success => {
        this.wp.setCurrentResponsePost(WordpressBi.Parser.fill(success));
        this.listaDePosts = success;
        console.log('Lista De Posts:', this.listaDePosts);
      },
      error => {
        console.log(error);
      }
    );
  }
}
