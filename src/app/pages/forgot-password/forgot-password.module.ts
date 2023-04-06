import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPageRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordPage } from "./forgot-password.page";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,ReactiveFormsModule, ForgotPasswordPageRoutingModule, HttpClientModule],
  declarations: [ForgotPasswordPage],
})
export class ForgotPasswordPageModule {}
