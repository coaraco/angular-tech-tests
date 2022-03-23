import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
<<<<<<< Updated upstream
import { UserEffects } from "src/app/store/user/user.effects";
=======
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RootState } from "src/app/store";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";
>>>>>>> Stashed changes

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
<<<<<<< Updated upstream
  public loading: boolean = false;
  public form: FormGroup;

  constructor(private userEfects: UserEffects){}
=======
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public form: FormGroup;
  public succes: boolean = true;

  constructor(private store: Store<RootState>){}
>>>>>>> Stashed changes

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  public handlePassword(): void{
<<<<<<< Updated upstream
    this.loading = true;
     this.userEfects.forgotPassword(this.form.value.username)
      .subscribe({
        next: resp => {
          console.log(resp);
          this.loading = false;
        },
        error: err => {
          console.log(err);
          this.loading = false;
        },

      });
=======
    this.store.dispatch(UserActions.forgot(this.form.value));
>>>>>>> Stashed changes
  }
}
