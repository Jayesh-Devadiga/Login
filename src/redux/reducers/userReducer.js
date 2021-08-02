import { LOGIN, LOGOUT, PAGE, STATE } from "../action/types";

const initialState = {
  users: [
    { username: "jayesh", password: "jayesh" },
    { username: "abc", password: "abc" },
  ],
  isLoggedIn: false,
  user: {},
  pageToDisplay: "splash",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STATE:
      return {
        ...action.payload,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case PAGE:
      return {
        ...state,
        pageToDisplay: action.payload,
      };
    default:
      return state;
  }
};
