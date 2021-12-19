import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { IoImage, IoAddCircleSharp } from 'react-icons/io5';
import Section from '../Section';
import UploadImage from './UploadImage';
import UploadBorder from '../../../../assets/img/upload_border.svg';

interface ImageSectionProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}
const ImageSection = ({ images, setImages }: ImageSectionProps) => {
  const uploadImageRef = useRef<HTMLInputElement>(null);

  const [imagesFiles, setImagesFiles] = useState<File[]>([]);

  const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const types = ['image/png', 'image/jpeg'];
    // eslint-disable-next-line no-restricted-syntax

    if (!files) return;
    console.log(files.length);
    for (let i = 0; i < files.length; i++) {
      const img = files.item(i);
      if (!img) return;
      if (
        types.includes(img.type) &&
        !imagesFiles.find((i) => i.name === img.name) &&
        imagesFiles.length < 6
      ) {
        setImagesFiles((prv) => [...prv, img]);
      }
    }
  };
  return (
    <Section title="عکس آگهی">
      <div className="add-new__photos">
        <div className="add-new__upload">
          <input
            ref={uploadImageRef}
            style={{ display: 'none' }}
            type="file"
            name="photos"
            id="photos"
            multiple
            onChange={handleImageInput}
            accept="image/jpeg, image/png"
          />
          <span onClick={() => uploadImageRef.current?.click()}>
            <UploadBorder id="upload-border" />
            <IoImage id="upload-image" />
            <IoAddCircleSharp id="upload-plus" />
          </span>
        </div>
        {imagesFiles.map((img) => (
          <UploadImage key={img.name} img={img} setImages={setImages} />
        ))}
      </div>
    </Section>
  );
};

export default ImageSection;
