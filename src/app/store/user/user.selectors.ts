import { UserData } from "src/app/interfaces";
import { RootState } from "..";

export const selectLoading = (state: RootState): boolean => state.user.loading;

export const selectAccessToken = (state: RootState): string => state.user.accessToken;

export const getUserData = (state: RootState): UserData => state.user.userData;
