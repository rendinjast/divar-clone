import { useEffect, useState } from 'react';
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

import useToast from '../../hooks/useToast';
import { ToastProp, ToastType } from '../../context/AppContext';

const Icon = (type: ToastType) => {
  switch (type) {
    case 'info':
      return <IoInformationCircleOutline />;
    case 'alert':
      return <IoAlertCircleOutline />;
    case 'success':
      return <IoCheckmarkCircleOutline />;
    case 'error':
      return <IoCloseCircleOutline />;

    default:
      return 'invalid icon';
  }
};
const Toast = ({ toast }: { toast: ToastProp }) => {
  const [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);
  const [shouldMount, setShouldMount] = useState(true);
  const { removeToast } = useToast();

  const duration = 3;
  const delay = 0.5;
  const size = 20;

  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(Math.ceil((circumference / 100) * (timer - 100)));

  const transition = {
    duration,
    delay,
    ease: 'easeIn',
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };
  const handlePause = () => {
    if (!intervalID) return;
    clearInterval(intervalID);
  };
  const handleStart = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        if (!intervalID) return 0;
        clearInterval(intervalID);
        setShouldMount(false);
        setTimeout(() => {
          removeToast(toast.id);
        }, 200);
        return prev;
      });
    }, 30);
    setIntervalID(interval);
  };
  useEffect(() => {
    handleStart();
    return () => {
      setTimer(0);
      setIntervalID(null);
      setShouldMount(false);
    };
  }, []);
  return (
    <>
      {shouldMount && (
        <div
          onMouseEnter={handlePause}
          onMouseLeave={handleStart}
          key={toast.id}
          className={`toast ${toast.type}`}
        >
          <p>{toast.message}</p>
        </div>
      )}
    </>
  );
};

export default Toast;
// layout
// initial={{ x: 100, rotate: 10 }}
// animate={{ x: -10, rotate: 0 }}
// whileHover={{ scale: 1.1 }}
// exit={{ x: 100, rotate: 10 }}
