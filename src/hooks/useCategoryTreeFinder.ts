import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoryType } from '../types';
import { CategoriesSelector } from './../redux/features/categories/categoriesSlice';

const useCategoryTreeFinder = (slug: string) => {
  const categories = useSelector(CategoriesSelector);
  const [lists, setLists] = useState<CategoryType[]>([]);

  const clear = () => {
    setLists([]);
  };
  useEffect(() => {
    if (!slug) return clear();
    const arrayList: CategoryType[] = [];

    const current = getParent(slug);
    if (!current) throw new Error('current slug not found');
    arrayList.unshift(current);
    if (arrayList[0].parent_slug === 'root') return setLists(arrayList);

    const parent = getParent(arrayList[0].parent_slug!);
    if (!parent) throw new Error('parent slug not found');
    arrayList.unshift(parent);
    if (arrayList[0].parent_slug === 'root') return setLists(arrayList);
    const parent2 = getParent(arrayList[0].parent_slug!);
    if (!parent2) throw new Error('parent slug not found');
    arrayList.unshift(parent2);
    if (arrayList[0].parent_slug === 'root') return setLists(arrayList);
  }, [slug]);

  const getParent = (pSlug: string): CategoryType | undefined => {
    const parent = categories.find((c) => c.slug === pSlug);
    return parent;
  };

  return lists;
};
export default useCategoryTreeFinder;
