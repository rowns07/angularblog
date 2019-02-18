import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {
    path: "login",
    component:LoginComponent 
},
{
  path: "home-admin",
  component:HomeAdminComponent,
  canActivate: [AuthGuardService] 
},
{
  path: "blog",
  component:BlogComponent 
},
{
  path: "**",
  redirectTo:"login"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
