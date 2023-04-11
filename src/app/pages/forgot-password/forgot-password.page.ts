import { Store, createAction } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { RootState } from "src/app/store";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})

export class ForgotPasswordPage implements OnInit {
  public responseMsg: string;
  public form: UntypedFormGroup;
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public username: string;

  constructor(private store: Store<RootState>, private http: HttpClient, private toastController: ToastController) { }

  public ngOnInit(): void {
    this.form = new UntypedFormGroup({ username: new UntypedFormControl("", [Validators.required]) });
  }

  public onSubmit(): void {
    const user = { username: this.form.value.username };
    this.store.dispatch(UserActions.passReset());

    setTimeout(() => {
      this.http.get("https://httpbin.org/get?username=" + user.username).subscribe(
        {
          next: () => {
            this.toastController
              .create({
                message: "Password reset successful",
                duration: 3000,
                color: "success",
                position: "top",
              })
              .then((toast) => {
                toast.present();
              });
          },

          error: error => {
            console.log(error);
          },
          complete: () => {
            this.store.dispatch(UserActions.passResetCompleted());
          },
        },
      );
    }, 1000);
  }
}
