import { Loadings } from "src/app/interfaces";
import { RootState } from "..";

export const selectLoading = (state: RootState): Loadings => state.user.loadings;

export const selectAccessToken = (state: RootState): string => state.user.accessToken;

export const selectUser = (state: RootState): string => state.user.user;
