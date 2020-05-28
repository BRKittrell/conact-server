import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import { ADD_CONTACT } from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "111-222-3333",
        type: "professional",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com",
        phone: "111-222-3333",
        type: "personal",
      },
      {
        id: 3,
        name: "Mike Doe",
        email: "mike@gmail.com",
        phone: "111-222-3333",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        test: state.test,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
