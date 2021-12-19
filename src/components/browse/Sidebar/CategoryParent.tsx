import { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../..';
import { CategoryType } from '../../../types';
import './categoryParent.scss';

interface ICategoryParent {
  tree: CategoryType[] | undefined;
}
const CategoryParent: FC<ICategoryParent> = ({ tree }) => {
  const history = useHistory();
  const { city }: { city: string } = useParams();
  if (!tree) return null;
  return (
    <div className="browse-sidebar__parent">
      {tree.length > 0 && (
        <Button
          text={tree[0].title}
          icon={tree[0].slug}
          look="browse-sidebar__parent-one"
          onClick={() => history.push(`/s/${city}/${tree?.at(0)?.slug}`)}
        />
      )}
      {tree.length > 1 && (
        <Button
          onClick={() => history.push(`/s/${city}/${tree?.at(1)?.slug}`)}
          look="browse-sidebar__parent-two"
          text={tree[1].title}
        />
      )}
    </div>
  );
};

export default CategoryParent;
