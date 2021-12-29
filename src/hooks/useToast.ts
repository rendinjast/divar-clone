import { ToastType, useAppContext } from '../context/AppContext';
import { AppActionTypes } from '../context/reducer/appReducer';

const useToast = () => {
  const { appDispatch } = useAppContext();
  const addToast = (type: ToastType, message: string) => {
    appDispatch({
      type: AppActionTypes.TOAST_ADD,
      payload: {
        id: Date.now().toString(),
        message,
        type,
      },
    });
  };
  const removeToast = (id: string) => {
    appDispatch({
      type: AppActionTypes.TOAST_REMOVE,
      payload: id,
    });
  };

  return { addToast, removeToast };
};
export default useToast;
