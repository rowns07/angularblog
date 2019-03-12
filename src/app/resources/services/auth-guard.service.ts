import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>(
      observer => {
        if (route.params.hash !== undefined && route.params.hash !== '') {
          observer.next(true);
        } else if (this.sessionService.getCurrentResponseLogin() !== undefined
          && this.sessionService.getCurrentResponseLogin().getToken() !== undefined) {
          observer.next(true);
        } else {
          observer.unsubscribe();
          this.sessionService.clear();
          this.router.navigateByUrl('blog');
        }
      }
    );
  }

}
