import { Component } from "@angular/core";
import { RootState } from "src/app/store";
import { Store } from "@ngrx/store";
import * as UserActions from "src/app/store/user/user.actions";

@Component({
  selector: "app-reset-password",
  templateUrl: "reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage {
  constructor(private store: Store<RootState>) {}

}
