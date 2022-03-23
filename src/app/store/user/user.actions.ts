import { createAction, props } from "@ngrx/store";

interface LoginRequestParams {
  username: string;
  password: string;
}

interface RecoverRequestParams {
  username: string;
}

export const setAccessToken = createAction("[USER] Set Access Token", props<{ accessToken: string }>());

export const login = createAction("[USER] Login", props<LoginRequestParams>());
export const loginSuccess = createAction("[USER] Login Success", props<{ accessToken: string }>());
export const loginFailure = createAction("[USER] Login Failure", props<{ reason: string }>());

export const logout = createAction("[USER] Logout");

export const recover = createAction("[USER] Recover", props<RecoverRequestParams>());
export const recoverSuccess = createAction("[USER] Recover Success", props<{ response: boolean }>());
export const recoverFailure = createAction("[USER] Recover Failure", props<{ reason: string }>());