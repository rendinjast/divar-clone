import { AppState, ToastProp } from '../AppContext';

export enum AppActionTypes {
  TOAST_ADD = 'TOAST_ADD',
  TOAST_REMOVE = 'TOAST_REMOVE',
  POPUP_SHOW = 'POPUP_SHOW',
  POPUP_HIDE = 'POPUP_HIDE',
}

type ToastAddAction = { type: AppActionTypes.TOAST_ADD; payload: ToastProp };
type ToastRemoveAction = { type: AppActionTypes.TOAST_REMOVE; payload: string };
type PopUpShowAction = { type: AppActionTypes.POPUP_SHOW; payload: string };
type PopUpHideAction = { type: AppActionTypes.POPUP_HIDE };

export type appAction = ToastAddAction | ToastRemoveAction | PopUpShowAction | PopUpHideAction;

const appReducer = (state: AppState, action: appAction): AppState => {
  switch (action.type) {
    case AppActionTypes.TOAST_ADD:
      return { ...state, toast: [...state.toast, action.payload] };
    case AppActionTypes.TOAST_REMOVE:
      return { ...state, toast: state.toast.filter((ts) => ts.id !== action.payload) };
    case AppActionTypes.POPUP_SHOW:
      return { ...state, popup: action.payload };
    case AppActionTypes.POPUP_HIDE:
      return { ...state, popup: null };
    default:
      return state;
  }
};

export default appReducer;
