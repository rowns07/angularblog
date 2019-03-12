import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WordpressBi } from '../resources/bi/wordpress.bi';
import { DadosPost } from '../resources/classes/dados-post';
import { HttpService } from '../resources/services/http.service';
import { WordpressService } from '../resources/services/wordpress.service';
import { AlertService } from '../shared/alert/alert.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  title = 'wordpress';
  modalRef: BsModalRef;

  public newPost: DadosPost;

  public testeEnvio: Array<any>;
  constructor(
    private http: HttpService,
    private modalService: BsModalService,
    private wpService: WordpressService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.newPost = new DadosPost();
    this.testeEnvio = [
      { title: 'TESTE FIXADO', content: 'CONTEUDO FIXADO NO COMPONENT', status: 'publish' }
    ];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // creatPost() {
  //   this.http.post('wp-json/wp/v2/posts', true, this.testeEnvio)
  //     .subscribe(
  //       sucess => {
  //         console.log(sucess);
  //         console.log('Teste de ENVIO',this.testeEnvio);
  //       },
  //       error => { console.log('nao deu certo') });
  // }

  public enviar(event: Event): void {
    // para prevenir o recarregamento da página
    event.preventDefault();

    const dados: DadosPost = Object.assign(new DadosPost(), this.newPost);
    this.newPost = undefined;

    new WordpressBi.RestWordpress(this.http).addPost(dados).subscribe(
      success => {
        // Preencher objeto no wordpress bi
        this.wpService.setCurrentResponsePost(WordpressBi.Parser.fill(success));
        console.log(success);
        this.modalRef.hide();
        this.alertService.showAlertSuccess('Post criado com sucesso.');
      },
      error => {
        this.newPost = dados;
        console.log(error);
        this.alertService.showAlertDanger('Não foi possivel realizar a postagem.');
      }
    );
  }
}
