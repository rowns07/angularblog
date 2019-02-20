import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../resources/services/wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts$: Observable<any[]>
  posts2: Observable<any[]>;
  postsTeste: any;

  constructor(private wp: WordpressService) {
   
    this.posts$ = this.wp.getPosts();
    console.log(this.posts$);

    this.posts2 = this.wp.loadPosts();
    console.log(this.getPostsTeste());

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
}
