/* eslint-disable @typescript-eslint/no-shadow */
import { createAction, props } from "@ngrx/store";
import { BearerGetRequestParams } from "src/app/services/api";

export enum UserActionNames {
  setAccessToken = "setAccessToken",
  login = "login",
  loadUser = "loadUser",
  logout = "logout",
}

export const setAccessToken = createAction(`USER - ${UserActionNames.setAccessToken}`, props<{ accessToken: string }>());

export const login = createAction(`USER - ${UserActionNames.login}`, props<BearerGetRequestParams>());
export const loginSuccess = createAction(`USER - ${UserActionNames.login} - Success`);
export const loginFailure = createAction(`USER - ${UserActionNames.login} - Failure`, props<{ status: number }>());

export const loadUser = createAction(`USER - ${UserActionNames.loadUser}`);
export const loadUserSuccess = createAction(`USER - ${UserActionNames.loadUser} - Success`, props<{ user: string }>());
export const loadUserFailure = createAction(`USER - ${UserActionNames.loadUser} - Failure`, props<{ reason: string }>());

export const logout = createAction(`USER - ${UserActionNames.logout}`);
export const logoutSuccess = createAction(`USER - ${UserActionNames.logout} - Success`);
export const logoutFailure = createAction(`USER - ${UserActionNames.logout} - Failure`, props<{ reason: string }>());
