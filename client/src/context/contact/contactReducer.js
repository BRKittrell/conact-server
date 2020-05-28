import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    default:
      return state;
  }
};
