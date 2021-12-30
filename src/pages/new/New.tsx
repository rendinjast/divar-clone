import { useEffect, useState } from 'react';
import { AddNew, CategorySelector } from '../../components';
import useToast from '../../hooks/useToast';
import './new.scss';

const New = () => {
  const [category, setCategory] = useState<string | null>(null);
  const { addToast } = useToast();
  useEffect(() => {
    addToast('info', 'فقط بخش موبایل در لوازم الکترونیکی دارای قسمت تخصصی است.');
  }, []);
  return (
    <div className="new-container">
      {category ? (
        <AddNew category={category} setCategory={setCategory} />
      ) : (
        <CategorySelector setCategory={setCategory} />
      )}
    </div>
  );
};

export default New;
