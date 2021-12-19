import { useEffect, useState } from 'react';

const useOutsideClick = (ref) => {
  const [bool, setBool] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setBool((prv) => true);
      } else {
        setBool((prv) => false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return bool;
};
export default useOutsideClick;
