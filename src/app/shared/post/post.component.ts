import { Component, OnInit } from '@angular/core';
import { DadosPost } from '../../resources/classes/dados-post';
import { HttpService } from '../../resources/services/http.service';
import { WordpressService } from '../../resources/services/wordpress.service';
import { ModalService } from '../modal/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: DadosPost;
  constructor(public wpService: WordpressService, private httpService: HttpService, public modalService:ModalService,private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.bsModalRef.hide();
  }
}
