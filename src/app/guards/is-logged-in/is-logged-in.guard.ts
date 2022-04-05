import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { first, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppRoutes } from "../../constants";
import { RootState } from "../../store";
import * as FromUser from "../../store/user/user.selectors";

@Injectable({ providedIn: "root" })
export class IsLoggedInGuard implements CanActivate {
  constructor(private store: Store<RootState>, private router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(FromUser.selectAccessToken).pipe(
      first(),
      switchMap(accessToken => {
        if (accessToken) return of(true);
        return of(this.router.parseUrl(AppRoutes.Login));
      }),
    );
  }
}
