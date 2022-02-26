import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { localStorageSync } from "ngrx-store-localstorage";

import { effects, reducers, RootState } from "src/app/store";

import { persistedKeys as userPersistedKeys } from "src/app/store/user/state";
import { logoutMetaReducer } from "src/app/store/user/meta-reducer";

import { AppComponent } from "src/app/app.component";
import { AppRoutingModule } from "src/app/app-routing.module";

export const localStorageReduxSync = (reducer: ActionReducer<RootState>): ActionReducer<any> =>
  localStorageSync({
    keys: [{ user: userPersistedKeys }],
    rehydrate: true,
    storageKeySerializer: key => key,
  })(reducer);

const metaReducers: MetaReducer<any, any>[] = [localStorageReduxSync, logoutMetaReducer];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
