/* eslint-disable @typescript-eslint/indent,@typescript-eslint/ban-types */
import { Action, ActionReducer, INIT } from "@ngrx/store";
import { initialRootState } from "..";
import * as UserActions from "./actions";

export const logoutMetaReducer =
  <State extends {}>(reducer: ActionReducer<State>): ActionReducer<State> =>
  (state: State, action: Action): any =>
    action.type === UserActions.logoutSuccess.type ? reducer(initialRootState as any, { type: INIT }) : reducer(state, action);
