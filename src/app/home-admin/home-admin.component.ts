import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WordpressBi } from '../resources/bi/wordpress.bi';
import { DadosPost } from '../resources/classes/dados-post';
import { HttpService } from '../resources/services/http.service';
import { SessionService } from '../resources/services/session.service';
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
  public listaStatus: Array<any>;

  constructor(
    private http: HttpService,
    private modalService: BsModalService,
    private wpService: WordpressService,
    private alertService: AlertService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.newPost = new DadosPost();
    this.addStatus();
  }
  private addStatus(): void {
    this.listaStatus = [];
    this.listaStatus.push('Cartões');
    this.listaStatus.push({ name: 'Publicar', value: 'publish' });
    this.listaStatus.push({ name: 'Futuro', value: 'future' });
    this.listaStatus.push({ name: 'Rascunho', value: 'draft' });
    this.listaStatus.push({ name: 'Pendente', value: 'pending' });
    this.listaStatus.push({ name: 'Privado', value: 'private' });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public enviar(event: Event): void {
    // para prevenir o recarregamento da página
    event.preventDefault();

    const dados: DadosPost = Object.assign(new DadosPost(), this.newPost);
    this.newPost = undefined;

    new WordpressBi.RestWordpress(this.http).addPost(dados).subscribe(
      success => {
        // Preencher objeto no wordpress bi

        this.wpService.setCurrentResponsePost(WordpressBi.Parser.fillList(success));
        this.atualizaListaDePosts();
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

  public atualizaListaDePosts(): void {
    new WordpressBi.Inteligencia(this.http, this.wpService).listPostsFromBack().subscribe(
      // this.wpService.clear();
      success => {
        this.wpService.clear();
        console.log('atualizaListaDePosts');

      },
      error => {
        console.log(error);

      }
    );
  }
}
