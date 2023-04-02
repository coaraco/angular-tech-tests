import { createAction, props } from "@ngrx/store";

interface LoginRequestParams {
  username: string;
  password: string;
}

export const setAccessToken = createAction("[USER] Set Access Token", props<{ accessToken: string }>());

export const login = createAction("[USER] Login", props<LoginRequestParams>());
export const loginSuccess = createAction("[USER] Login Success", props<{ accessToken: string }>());
export const loginFailure = createAction("[USER] Login Failure", props<{ reason: string }>());

export const logout = createAction("[USER] Logout");

export const recoverPassword = createAction("[USER] Recover password", props<{ username: string }>());
export const recoverySuccess = createAction("[USER] Recover Success", props<{ username: string }>());
export const recoveryFailure = createAction("[USER] Recover Failure", props<{ reason: string }>());
