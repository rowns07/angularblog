import { Component, OnInit } from '@angular/core';
import { WordpressBi } from '../../resources/bi/wordpress.bi';
import { WordpressService } from '../../resources/services/wordpress.service';
import { HttpService } from '../../resources/services/http.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styles: []
})
export class AlterarComponent implements OnInit {

  constructor(private wpService:WordpressService, private httpService:HttpService) { }

  ngOnInit() {
  }

  public alterar() {
    new WordpressBi.RestWordpress(this.httpService).updatePost(this.wpService.getCurrentResponsePost())
    .subscribe(
      success =>{
        console.log('deu certo o testinho')
      },error =>{
        console.log('deu merda no testinho')

      })
  }
}
