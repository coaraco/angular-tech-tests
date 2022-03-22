import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import * as UserActions from "src/app/store/user/user.actions";

export const userReducer = createReducer(
  initialState,

  on(UserActions.login, state => ({ ...state, loading: true })),

  on(UserActions.loginSuccess, (state, { accessToken }) => ({ ...state, accessToken, loading: false })),

  on(UserActions.loginFailure, state => ({ ...state, loading: false })),

  on(UserActions.logout, () => initialState),

<<<<<<< Updated upstream
=======
  on(UserActions.forgot, state => ({...state, loading: true})),

  on(UserActions.forgotSuccess, state => ({...state, loading: false})),

  on(UserActions.forgotFailure, state => ({...state, loading: false})),

>>>>>>> Stashed changes
);
