import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "src/app/store/user/user.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { NavController, ToastController } from "@ionic/angular";
import { AppRoutes } from "src/app/constants";
import { Observable, of } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UserService } from "src/app/services/user.service";
import { RootState } from "..";


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

  public sendRecovery$: Observable<unknown> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.recoverPassword),
        mergeMap(({ username }) =>
          this.userService.sendRecovery(username).pipe(
            map(async (response) => {
              const name: string = response.body.args.username;
              this.store.dispatch(UserActions.recoverySuccess({ username: name }));
              const message = "Recovery link has been sent";
              // Only for test purpose. There should be some error status handling.
              const toast = this.displayNotification(message);
              await (await toast).present();
            }),
            catchError(async (error: HttpErrorResponse) => {
              // Stop loading if request fails and show error notification.
              this.store.dispatch(UserActions.recoveryFailure({ reason: error.message }));
              const toast = this.displayNotification(error.message); // Only for test purpose. There should be some error status handling.
              await (await toast).present();
            }),
          ),
        ),
      ),
    { dispatch: false },
  );

  public recoverySuccess$: Observable<unknown> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.recoverySuccess),
        tap(() => this.navController.navigateRoot(AppRoutes.Login)),
      ),
    { dispatch: false },
  );

  constructor(
    private store: Store<RootState>,
    private actions$: Actions,
    private http: HttpClient,
    private userService: UserService,
    private toastController: ToastController,
    private navController: NavController) {}

    public displayNotification = (message, duration = 3000): Promise<HTMLIonToastElement> => this.toastController.create({
      message,
      duration,
    });

}
