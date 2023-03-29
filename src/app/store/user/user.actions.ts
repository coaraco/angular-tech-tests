import { createAction, props } from "@ngrx/store";
import { UserData } from "src/app/interfaces";

interface LoginRequestParams {
  username: string;
  password: string;
}

export const setAccessToken = createAction("[USER] Set Access Token", props<{ accessToken: string }>());

export const login = createAction("[USER] Login", props<LoginRequestParams>());
export const loginSuccess = createAction("[USER] Login Success", props<{ accessToken: string }>());
export const loginFailure = createAction("[USER] Login Failure", props<{ reason: string }>());

export const getUserData = createAction("[USER] Get User Data", props<{ userData: UserData }>());
export const getUserDataSuccess = createAction("[USER] Get User Data Success", props<{ userData: UserData }>());
export const getUserDataFailure = createAction("[USER] Get User Data Failure");

export const logout = createAction("[USER] Logout");
