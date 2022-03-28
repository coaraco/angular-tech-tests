import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';

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
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  public forgottenForm: FormGroup;
  constructor(public alertController: AlertController, private store: Store<RootState>) {}

  ngOnInit(){
    this.forgottenForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  //Updates the button and calls the API
  async setLoading(){
    await this.rememberPassword()
    await this.presentAlert()
  }

  //A little delay to demonstrate the spinner in the button.
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  //Gets username and checks API
  public rememberPassword(): void {
    this.store.dispatch(UserActions.forgottenPassword(this.forgottenForm.value));
  }
  //Alert to show to the user if login was successful.
  async presentAlert() {
    // this.loading = false
    const alert = await this.alertController.create({
      cssClass: 'alert-success',
      header: 'Success!',
      subHeader: 'Check your email',
      message: 'An email was sent to you with instruccions to get you back in.',
      buttons: ['OK']
    });

    await alert.present();

    await alert.onDidDismiss().then(()=>{
      // this.loading = false
    }) 
  }
}
