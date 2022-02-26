import { ActionReducerMap } from "@ngrx/store";

import { userReducer } from "./user/reducer";

import { UserState, initialState as user } from "./user/state";

import { UserEffects } from "./user/effects";

export const getActionName = (action: string): string => {
  const aux = action.split(" - ");
  if (aux && aux.length > 1) return aux[1];
  else return "";
};

export interface RootState {
  user: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
  user: userReducer,
};

export const initialRootState: RootState = {
  user,
};

export const effects = [UserEffects];
