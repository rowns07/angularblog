import { Component, OnInit } from '@angular/core';
import { WordpressBi } from '../../resources/bi/wordpress.bi';
import { HttpService } from '../../resources/services/http.service';
import { WordpressService } from '../../resources/services/wordpress.service';
import { AlertService } from '../alert/alert.service';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styles: []
})
export class AlterarComponent implements OnInit {

  constructor(
    private wpService: WordpressService,
    private httpService: HttpService,
    private alertService: AlertService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  public alterar() {
    new WordpressBi.RestWordpress(this.httpService).updatePost(this.wpService.getCurrentResponsePost())
      .subscribe(
        success => {
          console.log('deu certo o testinho');
          this.alertService.showAlertSuccess('Post alterado com sucesso.');
          this.modalService.close();
        }, error => {
          console.log('deu merda no testinho');
          this.alertService.showAlertSuccess('Problemas ao alterar post.');
        });
  }
}
