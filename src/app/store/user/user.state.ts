export interface UserState {
  accessToken?: string;
  loading: boolean;
  response: boolean;
}

export const initialState: UserState = {
  accessToken: null,
  loading: false,
  response: false,
};
