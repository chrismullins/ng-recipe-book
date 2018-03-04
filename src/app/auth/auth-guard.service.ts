import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('auth').map((authState: fromAuth.State) => {
      return authState.authenticated
    });
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // return this.store.select('auth').map((authState: fromAuth.State) => {
    //   return authState.authenticated
    // });
    return true;
  }

  constructor(private store: Store<fromApp.AppState>) { }

}
