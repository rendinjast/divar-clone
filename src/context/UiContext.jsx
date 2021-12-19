import React, { useReducer, createContext, useContext } from 'react';
import uiReducer from './reducer/uiReducer';

const initReducer = {
  sidebar: false,
  persian: false,
  dark: false,
  popup: {
    visibility: false,
    component: {
      name: '',
      props: {},
    },
  },
  toast: [],
};
const UiContext = createContext();
export const useUiContext = () => useContext(UiContext);

const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initReducer);

  return (
    <UiContext.Provider
      value={{
        uiState: state,
        uiDispatch: dispatch,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiProvider;
