import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};