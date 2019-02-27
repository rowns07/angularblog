import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { WordpressService } from './resources/services/wordpress.service';
import { FormsModule } from '@angular/forms';
import { HttpService } from './resources/services/http.service';
import { CommonModule } from '@angular/common';
import { SessionService } from './resources/services/session.service';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MenuComponent } from './shared/menu/menu.component';
import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './shared/alert/alert.service';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalService } from './shared/modal/modal.service';
import { PostComponent } from './shared/post/post.component';
import { AlterarComponent } from './shared/alterar/alterar.component';
import { VisualizarComponent } from './shared/visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    HomeAdminComponent,
    MenuComponent,
    AlertComponent,
    ModalComponent,
    PostComponent,
    AlterarComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  providers: [
    WordpressService,
    HttpService,
    SessionService,
    AuthGuardService,
    AlertService,
    ModalService
  ],
  entryComponents: [
    AlertComponent,
    ModalComponent,
    AlterarComponent,
    VisualizarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
