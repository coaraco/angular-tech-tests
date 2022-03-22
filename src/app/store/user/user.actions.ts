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

export const forgot = createAction("[USER] Forgot Password", props<{ username: string }>());
export const forgotSuccess = createAction("[USER] Forgot Success");
export const forgotFailure = createAction("[USER] Forgot Failure", props<{ reason: string }>());
