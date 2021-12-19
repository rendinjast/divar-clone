import { useEffect, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Button, Collapse, TextField } from '../..';
import icons from '../../../fixtures/icons';
import CategoryHelper from '../../../helpers/categoryHelper';
import { CategoriesSelector } from '../../../redux/features/categories/categoriesSlice';
import { CurrentCategoryType } from '../../../types';
import './categorySelector.scss';

interface Props {
  setCategory: (slug:string) => void;
}
const CategorySelector = ({ setCategory }: Props) => {
  const [parent, setParent] = useState<string>('root');
  const { categories } = useSelector(CategoriesSelector);
  const [currentCategory, setCurrentCategory] = useState<CurrentCategoryType>();
  
  
  useEffect(() => {
    const cc = CategoryHelper(categories!, parent);
    console.log('🦋 ~ file: CategorySelector.tsx ~ line 21 ~ cc', cc);
    setCurrentCategory(cc);
  }, [parent]);
  const handleCategoryClick = (slug?: string) => {};
  
  if (!currentCategory) return <div>not found</div>;
  const  tree = currentCategory.tree![currentCategory.tree?.length! - 1]

  return (
    <div className="new__category">
      <div className="new__category-header">
        <h1>ثبت آگهی</h1>
        <h4 className="lighten">دستهٔ آگهی را انتخاب کنید</h4>
      </div>
      {tree && (
        <Button
          text={`بازگشت به ${tree.parent_slug === 'root' ? "دسته بندی اصلی" :   tree.title}`}
          onClick={() => setParent(currentCategory.parent_slug!)}
          look="lighten"
          icon="back"
        />
      )}
      <ul className="new__category-list">
        {currentCategory.children!.map((cat) => (
          <li key={cat.slug} onClick={() =>currentCategory.isFinal ?  setCategory(cat.slug!) : setParent(cat.slug || 'root')}>
            <span>
              {icons[cat.slug!]}
              <span> {cat.title}</span>
            </span>
            <IoChevronBackOutline />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
