import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from '../auth/auth.action';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private router = inject(Router)
  constructor(
    private actions$: Actions,

  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) => {
        console.log(username);

        // match the Creaditionals
        if (username == 'admin' && password == 'admin') {
          return of(AuthActions.loginSuccess({ username, password }));
        } else {
          //if Invalid Creaditionals
          alert('Invalid Creaditionals')
          return of();
        }
      })
    )
  );
  navigateOnSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigate(['/list']); // Navigate to the dashboard or any route you want
        })
      ),
    { dispatch: false } // This effect doesn't dispatch any new action
  );
}
