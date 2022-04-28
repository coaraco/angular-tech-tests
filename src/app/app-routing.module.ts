import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppRoutes } from "./constants";
import { IsLoggedInGuard } from "./guards/is-logged-in/is-logged-in.guard";

const routes: Routes = [
  {
    path: AppRoutes.Login,
    loadChildren: (): any => import("./pages/login/login.module").then(m => m.LoginPageModule),
  },
  {
    path: AppRoutes.ForgotPassword,
    loadChildren: (): any => import("./pages/forgot-password/forgot-password.module").then(m => m.ForgotPasswordPageModule),
  },
  {
    path: AppRoutes.Home,
    loadChildren: (): any => import("./pages/home/home.module").then(m => m.HomePageModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: AppRoutes.ResetPassword,
    loadChildren: (): any => import("./pages/reset-password/reset-password.module").then(m => m.ResetPasswordModule),
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
