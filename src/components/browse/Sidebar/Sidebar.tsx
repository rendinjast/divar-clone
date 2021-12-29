import { useState } from 'react';
import { Collapse, Socials, TextField, Toggle } from '../..';
import useResponsive from '../../../hooks/useResponsive';
import CategorySelect from './CategorySelect';
import './sidebar.scss';

const Sidebar = () => {
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [checkOnlyPics, setCheckOnlyPics] = useState(false);
  const [checkUrgent, setCheckUrgent] = useState(false);

  return (
    <nav className="browse-sidebar__container no-select">
      <CategorySelect />
      <div>
        <Collapse title="مکان" show={showPlace} setShow={setShowPlace}>
          under development
        </Collapse>
        <Collapse title="قیمت" show={showPriceRange} setShow={setShowPriceRange}>
          <div>
            <TextField placeholder="مثلا ۴۰۰۰۰ هزار تومان" />
          </div>
          <div>
            <TextField placeholder="مثلا ۴۰۰۰۰ هزار تومان" />
          </div>
        </Collapse>
        <Toggle check={checkOnlyPics} setCheck={setCheckOnlyPics} label="فقط عکس دار" />
        <Toggle check={checkUrgent} setCheck={setCheckUrgent} label="فقط فوری‌ها" />
        <Socials look="lighten" />
      </div>
    </nav>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
