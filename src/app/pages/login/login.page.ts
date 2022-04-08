import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RootState } from "src/app/store";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit, OnDestroy {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public username$: Observable<string> = this.store.select(FromUser.selectUsername);
  public form: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(private store: Store<RootState>) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

    // Subscribe to username value from store and assign it to formControl.
    // Added unsubscription onDestroy.
    this.username$.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe((data) => {
      this.form.controls.username.patchValue(data);
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public login(): void {
    this.store.dispatch(UserActions.login(this.form.value));
  }
}
