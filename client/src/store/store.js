import React, { useReducer } from "react";
import AppContext from "./context";
import reducer from "./reducer";
import initialState from "./state";

import { SET_AUTH_USER } from "./actions";

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (user) => {
    dispatch({
      type: SET_AUTH_USER,
      payload: user,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        user: state.user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
