import { createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer";

export const contextApi = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <contextApi.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
