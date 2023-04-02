/* eslint-disable */
import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { RootState } from "src/app/store";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public username$: Observable<string> = this.store.select(FromUser.selectUsername);
  public form: UntypedFormGroup;
  showPassword = false;
  passwordToggleIcon = "eye";

  constructor(private store: Store<RootState>) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? "eye-off" : "eye";
  }

  public ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required]),
    });

    this.funkyConsoleLog();
    
  }

  
  public login(): void {
    const { username, password } = this.form.value;
    if (!username || !password) return;

    this.store.dispatch(UserActions.login(this.form.value));
  }


  private funkyConsoleLog(): void {
    const message = "%c Hello 👋🏼! \nWe expect that you open the console and see that 😉\nGood job";
    const styles = [
      "font-size: 20px",
      "font-family: monospace",
      "background: white",
      "display: inline-block",
      "color: black",
      "padding: 8px 19px",
      "border: 1px dashed",
    ].join(";");
    console.log(message, styles); // eslint-disable-line
  }
}
