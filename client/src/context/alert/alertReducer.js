import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      if (action.payload.msg === "No token present. Authorization denied.") {
        return [...state];
      } else {
        return [...state, action.payload];
      }
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
