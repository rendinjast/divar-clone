import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PostDetails, PostImages } from '../../components';
import { usePost } from '../../hooks/useFirestore';
import './post.scss';
type params = {
  shortid: string;
};
const Post = () => {
  const { shortid }: params = useParams();
  const { data, status } = usePost(shortid);
  return (
    <div className="post">
      {data && (
        <>
          <PostDetails
            title={data.title!}
            description={data.description!}
            createdAt={data.createdAt!}
            city={data.city!}
          />
          <PostImages images={data.images} position={data.position} />
        </>
      )}
    </div>
  );
};
export default Post;
