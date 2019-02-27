import { Injectable, Type } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeAdminComponent } from '../../home-admin/home-admin.component';
import { AlterarComponent } from '../alterar/alterar.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private bsModalService: BsModalService) { }

  showModal(component:Type<any>) {
    // ALTERAR COMPONENT
     const bsModalRef: BsModalRef = this.bsModalService.show(component);
    // bsModalRef.content.type = type;
    // bsModalRef.content.message = message;
     bsModalRef.content.closeBtnName = 'Close';

  }

}
