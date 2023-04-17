import { userData } from "src/app/constants";
import { UserData } from "src/app/interfaces";

export interface UserState {
  accessToken?: string;
  loading: boolean;
  userData: UserData;
}

export const initialState: UserState = {
  accessToken: null,
  loading: false,
  userData: null,
};
