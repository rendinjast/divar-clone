import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [device, setDevice] = useState('desktop');
  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 440) {
      setDevice('mobile');
    }
  }, []);
  return device;
};
export default useResponsive;
