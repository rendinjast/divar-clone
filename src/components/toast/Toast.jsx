import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  IoAlertCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoCloseOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

import useToast from '../../hooks/useToast';
import { TOAST_ALERT, TOAST_ERROR, TOAST_INFO, TOAST_SUCCESS } from '../../constants/notifyTypes';

const Icon = (type) => {
  switch (type) {
    case TOAST_INFO:
      return <IoInformationCircleOutline />;
    case TOAST_ALERT:
      return <IoAlertCircleOutline />;
    case TOAST_SUCCESS:
      return <IoCheckmarkCircleOutline />;
    case TOAST_ERROR:
      return <IoCloseCircleOutline />;

    default:
      return 'invalid icon';
  }
};
const Toast = ({ toast }) => {
  const [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
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
    clearInterval(intervalID);
  };
  const handleStart = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
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
      setIntervalID(0);
      setShouldMount();
    };
  }, []);
  return (
    <>
      {shouldMount && (
        <div
          layout
          initial={{ x: 100, rotate: 10 }}
          animate={{ x: -10, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          exit={{ x: 100, rotate: 10 }}
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
Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Toast;
