import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import {  ChangeCategory } from '../../redux/features/filters/filtersSlice';
import { Ads, Sidebar } from '../../components';
import './browse.scss';
import {
  CategoriesSelector,
  ChangeCurrentCategory,
} from '../../redux/features/categories/categoriesSlice';
import useResponsive from '../../hooks/useResponsive';

const Application = () => {
  const dispatch = useDispatch();
  const device = useResponsive();
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
      {device === 'desktop' && <Sidebar />}
      <Ads />
    </div>
  );
};

export default Application;
