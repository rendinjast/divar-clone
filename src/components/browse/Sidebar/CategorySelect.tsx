import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../..';
import useCategoryTreeFinder from '../../../hooks/useCategoryTreeFinder';
import { CategoriesSelector } from '../../../redux/features/categories/categoriesSlice';
import { filtersSelector } from '../../../redux/features/filters/filtersSlice';
import { CategoryType } from '../../../types';
import CategoryParent from './CategoryParent';

const CategorySelect = () => {
  const { currentCategory } = useSelector(CategoriesSelector);
  const history = useHistory();
  const { city, category }: { city: string; category: string } = useParams();
  // const categoryTree = useCategoryTreeFinder(category);
  // console.log(categoryTree);
  const handleCategoryClick = (cat: CategoryType) => {
    history.push(`/s/${city}/${cat.slug}`);
  };
  return (
    <div className="browse-sidebar__categories">
      {currentCategory ? (
        <>
          <h4>دسته بندی ها</h4>
          {currentCategory.slug !== 'root' && (
            <Button
              onClick={() => history.push(`/s/${city}`)}
              text="بازگشت به همه"
              look="lighten"
              icon="back"
            />
          )}
          <CategoryParent tree={currentCategory.tree} />
          <div
            className={`browse-sidebar__categories-list ${currentCategory.isFinal ? 'final' : ''}`}
          >
            {currentCategory.children &&
              currentCategory.children.map((cat) => (
                <Button
                  key={cat.slug}
                  icon={cat.slug}
                  text={cat.title}
                  look={`lighten ${
                    category === cat.slug && cat.parent_slug !== 'root' ? 'selected' : ''
                  }`}
                  onClick={() => handleCategoryClick(cat)}
                />
              ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CategorySelect;
