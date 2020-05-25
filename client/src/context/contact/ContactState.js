import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  SET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Adam Ross",
        email: "adam@gmail.com",
        phone: "111-111-1111",
        type: "Profesional",
      },
      {
        id: 2,
        name: "Jake Ross",
        email: "jake@gmail.com",
        phone: "111-111-1111",
        type: "Profesional",
      },
      {
        id: 3,
        name: "John Ross",
        email: "john@gmail.com",
        phone: "111-111-1111",
        type: "Personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
};
