import { FC } from 'react';
import { IoBookmarkOutline, IoGitMerge } from 'react-icons/io5';
import { Button } from '../..';
import timeSince from '../../../utils/timeSince';
import './details.scss';

interface IDetails {
  title: string;
  description: string;
  createdAt: number;
  city: {
    name: string;
  };
}
const Details: FC<IDetails> = ({ title, description, createdAt, city }) => {
  return (
    <div className="post-details">
      <div className="post-details__title">
        <h1>{title}</h1>
        <p className="lighten">{`${timeSince(createdAt)} در ${city.name}`}</p>
      </div>
      <div className="post-details__actions">
        <Button look="primary" text="اطلاعات تماس" />
        <div>
          <IoGitMerge />
          <IoBookmarkOutline />
        </div>
      </div>
      <div className="post-details__description">
        <h3 className="strong">توضیحات</h3>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Details;
