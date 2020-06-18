import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Actions
  const setAlert = (msg, time = 3000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        id,
      },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, time);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
