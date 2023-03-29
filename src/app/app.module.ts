/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ActionReducer, StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { effects, reducers, RootState } from "./store";
import { HttpClientModule } from "@angular/common/http";
import { localStorageSync } from "ngrx-store-localstorage";

export const localStorageReduxSync = (reducer: ActionReducer<RootState>): ActionReducer<any> =>
  localStorageSync({ keys: [{ user: ["accessToken", "userData"] }], rehydrate: true })(reducer);

const metaReducers: MetaReducer<any, any>[] = [localStorageReduxSync];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
