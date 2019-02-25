import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../resources/services/session.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl['login'];
    this.router.navigate(['login'])
    this.sessionService.clear();
    console.log('SAINDO')
  }
}
