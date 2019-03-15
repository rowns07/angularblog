import { Component, OnInit, Type } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { WordpressBi } from '../resources/bi/wordpress.bi';
import { DadosPost } from '../resources/classes/dados-post';
import { HttpService } from '../resources/services/http.service';
import { WordpressService } from '../resources/services/wordpress.service';
import { AlertService } from '../shared/alert/alert.service';
import { AlterarComponent } from '../shared/alterar/alterar.component';
import { ModalService } from '../shared/modal/modal.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Observable<any[]>;
  listaDePosts: Array<DadosPost>;
  modalRef: BsModalRef;

  constructor(
    private modalService: ModalService,
    private wpService: WordpressService,
    private httpService: HttpService,
    private alertService: AlertService
  ) { }
  //  Recebendo Observable com pipe async
  // this.posts$ = this.wpService.getPosts();
  // console.log(this.posts$);
  ngOnInit() {
    this.atualizaListaDePosts();
  }

  // public listarPosts() {
  //   new WordpressBi.Inteligencia(this.httpService,this.wpService).listPostsFromBack().subscribe(
  //     success => {
  //       this.listaDePosts = this.wpService.getCurrentResponsePost();
  //       console.log('Lista De Posts:', this.listaDePosts);
  //     },
  //     error => {
  //       console.log(error);

  //     }
  //   );
  // }

  public atualizaListaDePosts():void{
    new WordpressBi.Inteligencia(this.httpService,this.wpService).listPostsFromBack().subscribe(
      // this.wpService.clear();
      success => {
        this.listaDePosts = this.wpService.getCurrentResponsePost();
        // console.log('Lista De Posts:', this.listaDePosts);
        console.log('atualizaListaDePosts');

      },
      error => {
        console.log(error);

      }
    );
  }



  public deletePost(id: number) {
    new WordpressBi.RestWordpress(this.httpService).delete(id)
      .subscribe(
        success => {
          console.log('Deu Certo ', success);
          this.alertService.showAlertSuccess('Post removido com sucesso');
          this.decline();
          this.atualizaListaDePosts();
        },
        error => {
          console.log('Deu Ruim', error);
          this.alertService.showAlertDanger('Erro ao tentar excluir Post');
          this.decline();
        }
      );
  }

  public postSelecionado(post: DadosPost[]) {
    this.wpService.clear();
    this.wpService.setCurrentResponsePost(post);
    this.modal(AlterarComponent);
    // this.router.navigate(['alterarPost']);
  }

  public modal(component: Type<any>) {
    this.modalService.showModal(component);
  }

  public openDeleteModal(template: any) {
    this.modal(template);
  }

  public decline() {
    this.modalService.close();
  }
}

