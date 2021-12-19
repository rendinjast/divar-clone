import { useEffect, useState } from 'react';
import { IoCameraSharp } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import moneyFormat from '../../../../utils/moneyFormat';
import timeSince from '../../../../utils/timeSince';
import './adCard.scss';

const AdCard = ({ image, title, price, date, shortid }) => {
  const history = useHistory();
  const [priceText, setPriceText] = useState('');

  useEffect(() => {
    console.log({ image, title });
    setPriceText(price ? `${moneyFormat(price)} تومان` : 'توافقی');
  }, []);
  return (
    <div className="ad-card__container" onClick={() => history.push(`/v/${shortid}/${title}`)}>
      <div className="ad-card__desc">
        <h3>{title}</h3>
        <div>
          <h5 className="lighten">{priceText}</h5>
          <span className="lighten">{timeSince(date)} پیش</span>
        </div>
      </div>
      <div className="ad-card__image">
        {image ? <img src={image} alt="" /> : <IoCameraSharp size={44} color="#bbb" />}
      </div>
    </div>
  );
};

export default AdCard;
