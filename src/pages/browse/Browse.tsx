import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import {  ChangeCategory } from '../../redux/features/filters/filtersSlice';
import { Ads, Sidebar } from '../../components';
import './browse.scss';
import {
  CategoriesSelector,
  ChangeCurrentCategory,
  LoadCategories,
} from '../../redux/features/categories/categoriesSlice';

const Application = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(CategoriesSelector);
  const { city, category }: { city: string; category: string } = useParams();

  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch(ChangeCurrentCategory(category, categories));
    }
  }, [categories, category]);

  useEffect(() => {
    localStorage.setItem('city', city);
  }, []);

  return (
    <div className="browse-container">
      <Sidebar />
      <Ads />
    </div>
  );
};

export default Application;
