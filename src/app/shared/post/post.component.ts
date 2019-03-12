import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DadosPost } from '../../resources/classes/dados-post';
import { WordpressService } from '../../resources/services/wordpress.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: DadosPost;
  constructor(public wpService: WordpressService,  public modalService: ModalService, private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
