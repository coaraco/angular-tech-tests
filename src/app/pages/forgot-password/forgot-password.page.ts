import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserEffects } from "src/app/store/user/user.effects";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public loading: boolean = false;
  public form: FormGroup;

  constructor(private userEfects: UserEffects){}

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  public handlePassword(): void{
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
  }
}
