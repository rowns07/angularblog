import { Injectable, Type } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modalSelecionado: BsModalRef;
  constructor(public bsModalService: BsModalService) { }

  // Função para chamar modal genericamente, recebebendo o component desejado
  showModal(component:Type<any>) {
     this.bsModalService.show(component);
  }
}
