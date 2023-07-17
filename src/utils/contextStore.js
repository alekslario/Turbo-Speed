// store.js
import React, { createContext, useContext, useReducer } from "react";
const StoreContext = createContext();

const applyMiddleware = (dispatch, getState) => (action) => {
  switch (action.type) {
    case "SOME_ACTION":
      break;
  }
  dispatch(action);
};

export const defaultState = {
  processedFiles: [],
  files: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: [...state.files, action.file],
      };

    case "ADD_PROCESSED_FILE":
      return {
        ...state,
        processedFiles: [...state.processedFiles, action.file],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
  });

  const getState = () => state;

  const enhancedDispatch = applyMiddleware(dispatch, getState);

  return (
    <StoreContext.Provider value={[state, enhancedDispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
