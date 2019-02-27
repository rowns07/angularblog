import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeAdminComponent } from '../../home-admin/home-admin.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private bsModalService: BsModalService) { }

  showModal() {
    // ALTERAR COMPONENT
     const bsModalRef: BsModalRef = this.bsModalService.show(HomeAdminComponent);
    // bsModalRef.content.type = type;
    // bsModalRef.content.message = message;
     bsModalRef.content.closeBtnName = 'Close';

  }

}
