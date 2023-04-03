import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage {
  public username: string;
  public spinner: boolean = false;

  constructor(private http: HttpClient, private alertCntrl: AlertController) {}

  public submit(): void {
    const username = this.username;
    this.spinner = true;
    this.http.get(`${environment.api}get?username=${this.username}`).subscribe((res)=>{
      if (res){
        this.spinner = false;
        this.username = "";
        this.submitAlert();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private async submitAlert(){
    const alerta = await this.alertCntrl.create({
      header: "Alert",
      subHeader: "Recuperar contraseña",
      message: "Su solicitud ha sido procesada con exito!",
      buttons: ["OK"],
      mode: "ios",
    });

    await alerta.present();
  }
}
