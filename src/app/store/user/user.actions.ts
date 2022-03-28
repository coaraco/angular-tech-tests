import { createAction, props } from "@ngrx/store";

interface LoginRequestParams {
  username: string;
  password: string;
}
interface ForgottenPwdRequestParams {
  username: string;
}

export const setAccessToken = createAction("[USER] Set Access Token", props<{ accessToken: string }>());

export const login = createAction("[USER] Login", props<LoginRequestParams>());
export const loginSuccess = createAction("[USER] Login Success", props<{ accessToken: string }>());
export const loginFailure = createAction("[USER] Login Failure", props<{ reason: string }>());

export const logout = createAction("[USER] Logout");

export const forgottenPassword = createAction("[USER] Forgotten password", props<ForgottenPwdRequestParams>());

export const forgottenPasswordSuccess = createAction("[USER] Forgotten Success");
export const forgottenPasswordFailure = createAction("[USER] Forgotten Failure");
