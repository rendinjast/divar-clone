import Toast from './Toast';
import './styles/toast.scss';
import { useUiContext } from '../../context/UiContext';

const ToastContainer = () => {
  const { uiState } = useUiContext();
  return (
    <div className="toast-wrapper">
      {uiState.toast.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
