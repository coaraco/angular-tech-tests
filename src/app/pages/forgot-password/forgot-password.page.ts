import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RootState } from "src/app/store";
import * as UserActions from "src/app/store/user/user.actions";
import * as FromUser from "src/app/store/user/user.selectors";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  
  public formpswd: FormGroup;

  constructor(public popupResetPswdrl: AlertController, private store: Store<RootState>, private AppRoutes: NavController) {}

  public ngOnInit(): void {
    this.formpswd = new FormGroup({
      username: new FormControl("", [Validators.required]),
    });
  }

  async resetPswd(){
    await this.changePswd()
    this.loading$.subscribe(
      async data => {
        if(!data){
          await this.popupResetPswd()
        }
      }
    )

  }
  public changePswd(): void{
    this.store.dispatch(UserActions.resetPswd(this.formpswd.value));
  }
  async popupResetPswd() {

    const alert = await this.popupResetPswdrl.create({
      header: 'Email Send',
      subHeader: 'Check your email',
      message: 'An email has been sent with instructions for creating a new password..',
      buttons: ['OK']
    });
    
    await alert.present();
    await alert.onDidDismiss().then(()=>{
      this.AppRoutes.back();
    }) 
  }
}
