export interface UserState {
  accessToken: string;
  username?: string;
  loading: boolean;
};

export const initialState: UserState = {
  accessToken: null,
  username: null,
  loading: false,
};
