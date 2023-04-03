import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage {
  public loading = false;
  public username: string;

  constructor(private http: HttpClient, private alertController: AlertController) {}

  public async resetPassword(): Promise<void> {
    this.loading = true;
    const url = `https://httpbin.org/get?username=${this.username}`;
    try {
      await this.http.get(url).toPromise();
      const alert = await this.alertController.create({
        header: "Success",
        message: "Your password has been reset",
        buttons: ["OK"],
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: "Error",
        message: "An error occurred while resetting your password.",
        buttons: ["OK"],
      });
      await alert.present();
    } finally {
      this.loading = false;
    }
  }
}
