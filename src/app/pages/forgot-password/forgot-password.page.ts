import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RootState } from "src/app/store";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public form: FormGroup;
  public succes: boolean = true;

  constructor(private store: Store<RootState>){}

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  public handlePassword(): void{
    this.store.dispatch(UserActions.forgot(this.form.value));
  }
}
