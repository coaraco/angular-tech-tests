import { Loadings } from "src/app/interfaces";

export const persistedKeys: string[] = ["accessToken", "refreshToken", "user"];

export interface UserState {
  accessToken?: string;
  user?: string;
  loadings: Loadings;
}

export const initialState: UserState = {
  accessToken: null,
  user: null,
  loadings: {},
};
