import { LOGIN, LOGOUT, PAGE, STATE } from "./types";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayPage = (page) => {
  return {
    type: PAGE,
    payload: page,
  };
};
export const initialState = (state) => {
  return {
    type: STATE,
    payload: state,
  };
};
