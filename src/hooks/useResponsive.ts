import { useEffect, useState } from 'react';
import useEventListener from './useEventListener';

const useResponsive = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const handleDevice = () => {
    console.log('resize');

    const width = window.innerWidth;
    if (width <= 440) return setDevice('mobile');
    if (width > 440 && width <= 768) return setDevice('tablet');
    setDevice('desktop');
  };
  useEventListener('resize', handleDevice);

  useEffect(() => {
    handleDevice();
  }, []);
  return device;
};
export default useResponsive;
