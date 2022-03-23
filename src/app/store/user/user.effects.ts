import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "src/app/store/user/user.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { NavController } from "@ionic/angular";
import { AppRoutes } from "src/app/constants";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UserEffects {


  public login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap(({ username, password }) =>
        this.http.post("https://httpbin.org/delay/2", { username, password }).pipe(
          map(() => UserActions.loginSuccess({ accessToken: Date.now().toString() })),
          catchError((error: HttpErrorResponse) => of(UserActions.loginFailure({ reason: error.message }))),
        ),
      ),
    ),
  );

  public loginSuccess$: Observable<unknown> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.navController.navigateRoot(AppRoutes.Home)),
      ),
    { dispatch: false },
  );

  public logout$: Observable<unknown> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.navController.navigateRoot(AppRoutes.Login)),
      ),
    { dispatch: false },
  );

  public forgotPassword$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.forgot),
    mergeMap(({ username }) =>
      this.http.get(`https://httpin.org/get/?username=${ username }`).pipe(
        map(() => UserActions.forgotSuccess()),
        catchError((error: HttpErrorResponse) => of(UserActions.forgotFailure({ reason: error.message}))),
      ),
    ),
  ),
);

  constructor(private actions$: Actions, private http: HttpClient, private navController: NavController) {}

}
