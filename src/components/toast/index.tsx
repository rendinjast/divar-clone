import { useEffect } from 'react';
import Toast from './Toast';
import './styles/toast.scss';
import { useAppContext } from '../../context/AppContext';

const ToastContainer = () => {
  const { appState } = useAppContext();
  useEffect(() => {
    console.log(appState.toast);
  }, [appState.toast]);

  return (
    <div className="toast-wrapper">
      {/* <Toast toast={{ id: '32', message: 'test message', type: 'info' }} /> */}
      {appState.toast.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
