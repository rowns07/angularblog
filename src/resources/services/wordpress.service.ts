import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordpressService {

  constructor(private http:HttpClient) { }

    
  public getPosts(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8888/teste/wp-json/wp/v2/posts', {
      params: {
        per_page: '6'
      }
    });
}


public loadPosts(): Observable<any[]> {
let url = "http://localhost:8888/teste/wp-json/wp/v2/posts";

return this.http.get<any[]>(url);
}

}
