/* eslint-disable */
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { RootState } from "src/app/store";


@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public forgotPasswordForm: FormGroup;

  constructor(
    private store: Store<RootState>,
    private httpClient: HttpClient
  ) {}

  resetPassword() {
    const username = 'Fran';

    const apiUrl = `https://httpbin.org/get?username=${username}`;

    this.httpClient.get(apiUrl).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }


  public ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

}
