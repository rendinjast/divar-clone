import Toast from './Toast';
import './styles/toast.scss';
import { useAppContext } from '../../context/AppContext';

const ToastContainer = () => {
  const { appState } = useAppContext();
  return (
    <div className="toast-wrapper">
      {appState.toast.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
