import { Injectable } from '@angular/core';
import { DadosPost } from '../classes/dados-post';

@Injectable()
export class WordpressService {

  constructor() { }


  // public getPosts(): Observable<any[]> {

  //   return this.http.get<any[]>('http://localhost:8888/teste/wp-json/wp/v2/posts', {
  //     params: {
  //       per_page: '6'
  //     }
  //   });
  // }


  // public loadPosts(): Observable<any[]> {
  //   let url = "http://localhost:8888/teste/wp-json/wp/v2/posts";

  //   return this.http.get<any[]>(url);
  // }

  private currentResponsePost: DadosPost;

  public getCurrentResponsePost(): DadosPost {
    return this.currentResponsePost;
  }

  public setCurrentResponsePost(currentResponsePost: DadosPost): void {
    this.currentResponsePost = currentResponsePost;
  }

  public clear(): void {
    this.currentResponsePost = undefined;
  }
}
