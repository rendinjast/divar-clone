import { FC, useEffect, useState } from 'react';
import { IoBookmarkOutline, IoGitMerge } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../..';
import { useAppContext } from '../../../context/AppContext';
import { AppActionTypes } from '../../../context/reducer/appReducer';
import { LoadSchema, loadSchema, SchemaSelector } from '../../../redux/features/schema/schemaSlice';
import { IPost } from '../../../types';
import timeSince from '../../../utils/timeSince';
import './details.scss';

interface IDetailsProps {
  post: IPost;
}
const Details = ({ post }: IDetailsProps) => {
  const [ContactVisible, setContactVisible] = useState<boolean>(false);

  const schema = useSelector(SchemaSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post.category) {
      dispatch(LoadSchema(post.category));
    }
  }, []);
  useEffect(() => {
    console.log('schema => ', schema);
  }, [schema]);

  return (
    <div className="post-details">
      <div className="post-details__title">
        <h1>{post.title}</h1>
        <p className="lighten">{`${timeSince(post.createdAt)} در ${post.city?.name}`}</p>
      </div>
      <div className="post-details__actions">
        <Button
          disabled={ContactVisible}
          onClick={() => setContactVisible(true)}
          look="primary"
          text="اطلاعات تماس"
        />
        <div>
          <IoGitMerge />
          <IoBookmarkOutline />
        </div>
      </div>
      {ContactVisible && (
        <div className="post-details__contact">
          <span>شماره موبایل</span>
          <span>{post.phone}</span>
        </div>
      )}
      {post.filters && (
        <div className="post-details__filters">
          {post.filters.map((filter) => (
            <div className="post-details__filter" key={filter.name}>
              {schema.status === 'success' && schema.data && (
                <>
                  <span>{schema.data.properties.find((x) => x.id === filter.name)?.title}</span>
                  <span>{filter.value}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="post-details__description">
        <h3 className="strong">توضیحات</h3>
        <span>{post.description}</span>
      </div>
    </div>
  );
};

export default Details;
