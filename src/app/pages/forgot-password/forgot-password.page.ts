import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from '@ionic/angular';


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

  enabled:boolean = false
  loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  forgottenForm: FormGroup;

  constructor(public alertController: AlertController, private store: Store<RootState>, private AppRoutes: NavController) {}

  ngOnInit(){
    this.forgottenForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  //Updates the button and calls the API
  async setLoading(){

    await this.rememberPassword()
    let loading = this.loading$.subscribe(
      async data => {
        if(!data){
          await this.presentAlert()
        }
      }
    )

  }
  //Gets username and checks API
  public rememberPassword(): void {
    this.store.dispatch(UserActions.forgottenPassword(this.forgottenForm.value))
  }
  //Alert to show to the user if login was successful.
  async presentAlert() {

    const alert = await this.alertController.create({
      cssClass: 'alert-success',
      header: 'Success!',
      subHeader: 'Check your email',
      message: 'An email was sent to you with instruccions to get you back in.',
      buttons: ['OK']
    });

    await alert.present();

    await alert.onDidDismiss().then(()=>{
      this.AppRoutes.back();
    }) 
  }
}