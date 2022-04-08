import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPageRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordPage } from "./forgot-password.page";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  imports: [SharedModule, CommonModule, IonicModule, ForgotPasswordPageRoutingModule],
  declarations: [ForgotPasswordPage],
})
export class ForgotPasswordPageModule {}
