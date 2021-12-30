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
      {status === 'loading' && <div className="post__loading">Loading...</div>}
      {data && status === 'success' && (
        <>
          <PostDetails post={data} />
          <PostImages post={data} />
        </>
      )}
    </div>
  );
};
export default Post;
