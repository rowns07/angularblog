import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SessionService } from '../../resources/services/session.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  bsModalRef: BsModalRef;
  navbarOpen = false;
  
  constructor(private router: Router, private sessionService: SessionService, private bsModalService: BsModalService) { }

  ngOnInit() {
  }

  logout() {
    this.sessionService.clear();
    this.router.navigate(['login']);
    console.log('SAINDO');
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

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
