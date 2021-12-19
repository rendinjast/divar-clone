import { TOAST_REMOVE, TOAST_ADD } from '../context/types/uiTypes';
import { useUiContext } from '../context/UiContext';

const useToast = () => {
  const context = useUiContext();
  const addToast = (type, message) => {
    context.uiDispatch({
      type: TOAST_ADD,
      payload: {
        id: Date.now(),
        message,
        type,
      },
    });
  };
  const removeToast = (id) => {
    context.uiDispatch({
      type: TOAST_REMOVE,
      payload: id,
    });
  };

  return { addToast, removeToast };
};
export default useToast;
