/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from "@angular/core";
import { RootState } from "src/app/store";
import { Store } from "@ngrx/store";
import { FormGroup, FormControl, UntypedFormGroup } from "@angular/forms";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";
import { UserData } from "src/app/interfaces";
import { userData } from "src/app/constants";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public infosegment: string = "personal";
  public form: UntypedFormGroup;
  public userInfo$: Observable<UserData> = this.store.select(FromUser.getUserData);
  constructor(private store: Store<RootState>) { }

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }

  public ngOnInit(): void {
    this.store.dispatch(UserActions.getUserData({ userData }));
  }
}
