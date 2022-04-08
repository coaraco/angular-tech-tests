import { createAction, props } from "@ngrx/store";

interface LoginRequestParams {
  username: string;
  password: string;
}

export const setAccessToken = createAction("[USER] Set Access Token", props<{ accessToken: string }>());

export const login = createAction("[USER] Login", props<LoginRequestParams>());
export const loginSuccess = createAction("[USER] Login Success", props<{ accessToken: string }>());
export const loginFailure = createAction("[USER] Login Failure", props<{ reason: string }>());
export const resetPswd = createAction("[USER] Reset Password", props<{username: string}>());
export const resetPswdSuccess = createAction("[USER] Reset Password Success");
export const resetPswdFailure = createAction("[USER] Reset Password Failure", props<{ reason: string }>());

export const logout = createAction("[USER] Logout");
