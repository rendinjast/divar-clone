import { useState } from 'react';
import { IoAlertCircle, IoChevronBack, IoChevronForward, IoHelpCircle } from 'react-icons/io5';
import { Map } from '../..';
import './images.scss';

const Images = ({ images, position }) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateTotal, setTranslateTotal] = useState(images && images.length * 50 - 50);

  const handleTranslate = (key) => {
    console.log(translateTotal);
    if (key === 'back') setTranslateX((prv) => prv - 50);
    if (key === 'forward') setTranslateX((prv) => prv + 50);
  };
  return (
    <div className="post__images">
      {images && (
        <>
          <div className="post__images-main">
            <div
              style={{ transform: `translateX(${translateX}rem)` }}
              className="post__images-main-slider"
            >
              {images && images.map((img) => <img key={img} src={img} alt="" />)}
            </div>
            <div
              className="post__images-main-back"
              style={{ display: translateX <= 0 ? 'none' : 'flex' }}
              onClick={() => handleTranslate('back')}
            >
              <IoChevronForward size={22} />
            </div>
            <div
              className="post__images-main-forward"
              style={{ display: translateX >= translateTotal ? 'none' : 'flex' }}
              onClick={() => handleTranslate('forward')}
            >
              <IoChevronBack size={22} />
            </div>
          </div>
          <div className="post__images-list">
            {images &&
              images.map((img, indx) => (
                <div
                  key={img}
                  style={{ filter: `brightness(${indx * 50 === translateX ? 100 : 60}%)` }}
                  onClick={() => setTranslateX(indx * 50)}
                  className="post__images-list-item"
                >
                  <img src={img} alt="" />
                </div>
              ))}
          </div>
        </>
      )}
      {position && <Map position={position} />}
      <ul className="post__images-links">
        <li>
          <IoHelpCircle />
          <span>راهنمای خرید امن</span>
        </li>
        <li>
          <IoAlertCircle />
          <span>گزارش مشکل آگهی</span>
        </li>
      </ul>
    </div>
  );
};

export default Images;
