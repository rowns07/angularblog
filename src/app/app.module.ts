import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { WordpressService } from '../resources/services/wordpress.service';
import { FormsModule } from '@angular/forms';
import { HttpService } from './resources/services/http.service';
import { CommonModule } from '@angular/common';
import { SessionService } from './resources/services/session.service';
import { AuthGuardService } from './resources/services/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [WordpressService, HttpService, SessionService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
