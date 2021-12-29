import { useReducer, createContext, useContext, FC, Dispatch } from 'react';
import uiReducer, { appAction } from './reducer/appReducer';

export type ToastType = 'success' | 'info' | 'alert' | 'error';
export interface ToastProp {
  id: string;
  type: ToastType;
  message: string;
}
export interface AppState {
  popup: string | null;
  toast: ToastProp[];
}
const initialState = {
  popup: null,
  toast: [],
};

const AppContext = createContext<{ appState: AppState; appDispatch: Dispatch<appAction> }>({
  appState: initialState,
  appDispatch: () => {},
});

export const useAppContext = () => useContext(AppContext);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        appState: state,
        appDispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
