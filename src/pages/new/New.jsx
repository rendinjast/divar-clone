import { useEffect, useState } from 'react';
import { AddNew, CategorySelector } from '../../components';
import './new.scss';

const New = () => {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    console.log(category);
  }, [category]);
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
