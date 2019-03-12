import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DadosPost } from '../../resources/classes/dados-post';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public newPost: DadosPost;
  public modalRef: BsModalRef;

  constructor() { }

  ngOnInit() {
  }

}
