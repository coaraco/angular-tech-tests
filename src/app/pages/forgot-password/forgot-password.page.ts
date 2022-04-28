import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { RootState } from "src/app/store";
import { Observable } from "rxjs";
import * as FromUser from "src/app/store/user/user.selectors";
import * as UserActions from "src/app/store/user/user.actions";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public form: FormGroup;
  constructor(private store: Store<RootState>) {}
  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  public requestPassword(): void {
    this.store.dispatch(UserActions.forgotPassword(this.form.value));
  }
}
