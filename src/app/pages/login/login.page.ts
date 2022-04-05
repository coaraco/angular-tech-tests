import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RootState } from "../../store";
import * as UserActions from "../../store/user/user.actions";
import * as FromUser from "../../store/user/user.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public form: FormGroup;
  fieldTextType: boolean;
 

  constructor(private store: Store<RootState>) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  public login(): void {
    this.store.dispatch(UserActions.login(this.form.value));
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
