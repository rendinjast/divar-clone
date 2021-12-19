import {
  DARK_THEME,
  PERSIAN_RTL,
  POPUP_SHOW,
  POPUP_HIDDEN,
  TOAST_ADD,
  TOAST_REMOVE,
  SIDEBAR_TOGGLE,
} from '../types/uiTypes';

const uiReducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return { ...state, sidebar: !state.sidebar };
    case PERSIAN_RTL:
      return { ...state, persian: !state.persian };
    case DARK_THEME:
      return { ...state, dark: !state.dark };
    case TOAST_ADD:
      return { ...state, toast: [...state.toast, action.payload] };
    case TOAST_REMOVE:
      return { ...state, toast: state.toast.filter((ts) => ts.id !== action.payload) };
    case POPUP_SHOW:
      return { ...state, popup: { visibility: true, component: action.payload } };
    case POPUP_HIDDEN:
      return { ...state, popup: { visibility: false, component: null } };
    default:
      return state;
  }
};

export default uiReducer;
