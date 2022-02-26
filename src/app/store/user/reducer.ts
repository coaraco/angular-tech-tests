import { createReducer, on } from "@ngrx/store";
import { initialState } from "./state";
import * as UserActions from "./actions";
import { getActionName } from "..";

export const userReducer = createReducer(
  initialState,

  on(UserActions.setAccessToken, (state, { accessToken }) => ({ ...state, accessToken })),

  on(UserActions.login, UserActions.loadUser, UserActions.logout, (state, { type }) => ({
    ...state,
    loadings: {
      ...state.loadings,
      [getActionName(type)]: true,
    },
  })),

  on(UserActions.loginSuccess, UserActions.loginFailure, UserActions.loadUserFailure, (state, { type }) => ({
    ...state,
    loadings: {
      ...state.loadings,
      [getActionName(type)]: false,
    },
  })),

  on(UserActions.loadUserSuccess, (state, { type, user }) => ({
    ...state,
    user,
    loadings: {
      ...state.loadings,
      [getActionName(type)]: false,
    },
  })),

  on(UserActions.logoutSuccess, () => initialState),
);
