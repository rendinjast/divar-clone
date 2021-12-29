import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';
import useToast from '../../hooks/useToast';
import { ToastProp, ToastType } from '../../context/AppContext';

// const circumference = Math.ceil(2 * Math.PI * radius);
// const fillPercents = Math.abs(Math.ceil((circumference / 100) * (timer - 100)));

const duration = 200;
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
  const [_, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>();
  const [shouldMount, setShouldMount] = useState(true);
  const { removeToast } = useToast();

  const handlePause = () => {
    if (!intervalID) return;
    clearInterval(intervalID);
  };
  const handleStart = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        console.log(prev);

        if (prev < 100) {
          return prev + 1;
        }
        setShouldMount(false);
        clearInterval(intervalID!);
        setTimeout(() => {
          removeToast(toast.id);
        }, duration);
        return prev;
      });
    }, 40);
    setIntervalID(interval);
  };
  useEffect(() => {
    console.log({ toast });

    handleStart();
    return () => {
      setTimer(0);
      clearInterval(intervalID!);
      setShouldMount(false);
    };
  }, []);
  return (
    <AnimatePresence>
      {shouldMount && (
        <motion.div
          layout
          initial={{ x: 40, rotate: 10 }}
          animate={{ x: 0, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          exit={{ x: 100, rotate: 10 }}
          transition={{
            duration: duration / 1000,
          }}
          onMouseEnter={handlePause}
          onMouseLeave={handleStart}
          key={toast.id}
          className={`toast toast_${toast.type}`}
        >
          {Icon(toast.type)}
          <p>{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
