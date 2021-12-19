import { Dispatch, SetStateAction, useEffect } from 'react';
import useStorage from '../../../../hooks/useStorage';

interface UploadImageProps {
  img: File;
  setImages: Dispatch<SetStateAction<string[]>>;
}
const UploadImage = ({ img, setImages }: UploadImageProps) => {
  const { progress, url } = useStorage(img);
  useEffect(() => {
    if (url) setImages((prv) => [...prv, url!]);
  }, [url]);
  return (
    <div>
      <img style={{ opacity: url ? 1 : 0.2 }} src={window.URL.createObjectURL(img)} alt="" />
    </div>
  );
};

export default UploadImage;
