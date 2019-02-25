import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from './alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private bsModalService: BsModalService) { }

  showAlert(type: string, message: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

  }

  showAlertSuccess(message: string) {
    this.showAlert('success', message)
  }

  showAlertDanger(message: string) {
    this.showAlert('danger', message)
  }
}
