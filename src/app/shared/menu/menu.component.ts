import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../resources/services/session.service';
import { ModalService } from '../modal/modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  bsModalRef: BsModalRef
  constructor(private router: Router, private sessionService: SessionService, modalService: ModalService, private bsModalService: BsModalService) { }

  ngOnInit() {
  }

  logout() {
    this.sessionService.clear();
    this.router.navigate(['login'])
    console.log('SAINDO')
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.bsModalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.logout();
    this.bsModalRef.hide();
  }

  decline(): void {
    this.bsModalRef.hide();
  }
}
